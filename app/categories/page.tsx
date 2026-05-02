import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Categories(){
 const categories = await prisma.category.findMany({ include: { posts: true } });
 return <div><h1 className="mb-4 text-2xl font-bold">Categories</h1><div className="grid gap-3 md:grid-cols-2">{categories.map(c=><Link key={c.id} href={`/feed?category=${c.slug}`} className="rounded-2xl border bg-white p-4 dark:bg-zinc-900"><p className="font-semibold">{c.name}</p><p className="text-sm opacity-70">{c.posts.length} posts</p></Link>)}</div></div>
}
