import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "database" },
  providers: [Credentials({
    credentials: { email: {}, password: {} },
    authorize: async (creds) => {
      const user = await prisma.user.findUnique({ where: { email: creds.email as string } });
      if (!user?.passwordHash) return null;
      const ok = await bcrypt.compare(creds.password as string, user.passwordHash);
      return ok ? user : null;
    }
  })],
  pages: { signIn: "/signin" }
});
