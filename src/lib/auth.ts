import CredentialsProvider from "next-auth/providers/credentials";
import { AuthOptions } from "next-auth";
import { prisma } from "@/lib/prisma";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      mobile: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        mobile: { label: "Mobile", type: "text" },
        otp: { label: "OTP", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.mobile || !credentials?.otp) {
          throw new Error("شماره موبایل و کد تایید الزامی است");
        }

        try {
          // Get user from database
          const user = await prisma.user.findUnique({
            where: { mobile: credentials.mobile },
          });

          if (!user) {
            throw new Error("کاربری با این شماره موبایل یافت نشد");
          }

          // Verify OTP using the API
          const verifyResponse = await fetch(
            `${process.env.NEXTAUTH_URL}/api/auth/verify-otp`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                mobile: credentials.mobile,
                otp: credentials.otp,
              }),
            }
          );

          if (!verifyResponse.ok) {
            throw new Error("کد تایید نامعتبر است");
          }

          return {
            id: user.id,
            mobile: user.mobile,
            email: user.email,
          };
        } catch (error) {
          console.error("Error in authorize:", error);
          throw error;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth",
  },
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
};
