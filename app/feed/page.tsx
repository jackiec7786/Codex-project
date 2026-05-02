import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Feed({ searchParams }: { searchParams: { parish?: string; q?: string }}) {
  const posts = await prisma.post.findMany({ where: { title: { contains: searchParams.q, mode: "insensitive" }, parish: searchParams.parish as never || undefined }, include: { author: true, category: true, comments: true, votes: true }, orderBy: { createdAt: "desc" }, take: 20 });
  return <div className="space-y-4"><h1 className="text-2xl font-bold">Browse feed</h1>{posts.map(p=><Link href={`/post/${p.slug}`} key={p.id} className="block rounded-2xl border bg-white p-4 dark:bg-zinc-900"><h2 className="font-semibold">{p.title}</h2><p className="text-xs">{p.category.name} • {p.parish} • {p.comments.length} comments • score {p.votes.reduce((a,v)=>a+(v.type==="UP"?1:-1),0)}</p></Link>)}</div>;
}
