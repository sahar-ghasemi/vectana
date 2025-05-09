import CredentialsProvider from "next-auth/providers/credentials";
import { AuthOptions } from "next-auth";
import { prisma } from "@/lib/prisma";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        mobile: { label: "Mobile", type: "text" },
        code: { label: "Code", type: "text" },
      },
      async authorize(credentials) {
        const { mobile, code } = credentials ?? {};
        if (!mobile || !code) return null;
        //check the code that is sent to mobile
        const user = await prisma.user.findUnique({ where: { mobile } });
        if (!user) return null;
        if (code !== "12345") return null;
        return user;
      },
    }),
  ],
  session: { strategy: "jwt" },
};
