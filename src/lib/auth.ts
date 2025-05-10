import CredentialsProvider from "next-auth/providers/credentials";
import { AuthOptions } from "next-auth";
import { prisma } from "@/lib/prisma";
import { Redis } from "ioredis";

const redis = new Redis({
  host: process.env.REDIS_HOST || "localhost",
  port: parseInt(process.env.REDIS_PORT || "6379"),
  password: process.env.REDIS_PASSWORD,
});

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        mobile: { label: "Mobile", type: "text" },
        otp: { label: "OTP", type: "text" },
      },
      async authorize(credentials) {
        const { mobile, otp } = credentials ?? {};
        if (!mobile || !otp) return null;

        const storedOTP = await redis.get(`otp:${mobile}`);
        if (!storedOTP) return null;
        if (otp !== storedOTP) return null;

        const user = await prisma.user.findUnique({ where: { mobile } });
        if (!user) return null;

        await redis.del(`otp:${mobile}`);
        return user;
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const u = user as { id: string; mobile: string };
        token.id = u.id;
        token.mobile = u.mobile;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        const user = session.user as { id?: string; mobile?: string };
        user.id = token.id as string;
        user.mobile = token.mobile as string;
      }
      return session;
    },
  },
};
