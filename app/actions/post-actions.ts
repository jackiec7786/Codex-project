"use server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { createPostSchema } from "@/lib/validation";
import { redirect } from "next/navigation";

export async function createPostAction(formData: FormData) {
  const session = await auth();
  if (!session?.user?.email) throw new Error("Unauthorized");
  const user = await prisma.user.findUnique({ where: { email: session.user.email } });
  if (!user) throw new Error("Unauthorized");
  const parsed = createPostSchema.parse(Object.fromEntries(formData));
  const slug = parsed.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const post = await prisma.post.create({ data: { ...parsed, parish: parsed.parish as never, authorId: user.id, slug } });
  redirect(`/post/${post.slug}`);
}
