import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function HomePage() {
  const recent = await prisma.post.findMany({ take: 5, orderBy: { createdAt: "desc" }, include: { category: true } });
  return <div className="space-y-6"><section className="rounded-2xl bg-brand-green p-8 text-white"><p className="text-sm">Local Notice: Tropical wave monitoring active. Stay alert.</p><h1 className="mt-2 text-4xl font-bold">Grenada Board</h1><p className="mt-2 max-w-2xl">A modern community board for Grenada, Carriacou, Petite Martinique, and the diaspora.</p><Link href="/create" className="mt-5 inline-block rounded-xl bg-brand-gold px-4 py-2 font-semibold text-black">Create a discussion</Link></section><section><h2 className="mb-2 text-xl font-semibold">Recent discussions</h2><div className="grid gap-3">{recent.map((p: any)=><Link key={p.id} className="rounded-xl border bg-white p-4 dark:bg-zinc-900" href={`/post/${p.slug}`}><p className="font-semibold">{p.title}</p><p className="text-sm opacity-70">{p.category.name}</p></Link>)}</div></section></div>;
}
