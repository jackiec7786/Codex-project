import { createPostAction } from "@/app/actions/post-actions";
import { prisma } from "@/lib/prisma";
import { PARISHES } from "@/lib/constants";

export default async function CreatePage(){
  const categories = await prisma.category.findMany({ orderBy: { name: "asc" } });
  return <form action={createPostAction} className="mx-auto max-w-2xl space-y-3"><h1 className="text-2xl font-bold">Create post</h1><input name="title" placeholder="Title" className="w-full rounded border p-2" required/><textarea name="body" className="min-h-40 w-full rounded border p-2" required/>
<select name="categoryId" className="w-full rounded border p-2">{categories.map((c: any)=><option key={c.id} value={c.id}>{c.name}</option>)}</select>
<select name="parish" className="w-full rounded border p-2">{PARISHES.map(p=><option key={p}>{p}</option>)}</select>
<input name="tags" placeholder="tags,comma,separated" className="w-full rounded border p-2"/><input name="imageUrl" placeholder="Optional image URL" className="w-full rounded border p-2"/><button className="rounded bg-brand-ocean px-4 py-2 text-white">Publish</button></form>
}
