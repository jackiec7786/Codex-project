"use server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { commentSchema } from "@/lib/validation";
import { revalidatePath } from "next/cache";

export async function createCommentAction(formData: FormData) {
  const session = await auth();
  if (!session?.user?.email) throw new Error("Unauthorized");
  const user = await prisma.user.findUnique({ where: { email: session.user.email } });
  if (!user) throw new Error("Unauthorized");
  const parsed = commentSchema.parse(Object.fromEntries(formData));
  await prisma.comment.create({ data: { ...parsed, authorId: user.id } });
  revalidatePath(`/post/${(await prisma.post.findUnique({ where: { id: parsed.postId } }))?.slug}`);
}
