import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { createCommentAction } from "@/app/actions/comment-actions";

export default async function PostDetail({ params }: { params: { slug: string } }) {
  const post = await prisma.post.findUnique({ where: { slug: params.slug }, include: { author: true, comments: { include: { author: true }, orderBy: { createdAt: "asc" } } } });
  if (!post) notFound();
  return <article className="space-y-6"><div className="rounded-2xl border bg-white p-5 dark:bg-zinc-900"><h1 className="text-2xl font-bold">{post.title}</h1><p className="mt-3 whitespace-pre-wrap">{post.body}</p></div><section><h2 className="mb-2 font-semibold">Comments</h2><form action={createCommentAction} className="mb-4 space-y-2"><input type="hidden" name="postId" value={post.id} /><textarea name="body" className="w-full rounded border p-2" required /><button className="rounded bg-brand-green px-3 py-2 text-white">Add comment</button></form><div className="space-y-2">{post.comments.map(c=><div key={c.id} className="rounded border p-3"><p className="text-sm font-medium">{c.author.name ?? "Neighbor"}</p><p>{c.body}</p></div>)}</div></section></article>;
}
