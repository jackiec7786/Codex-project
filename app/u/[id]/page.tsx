import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function Profile({ params }: { params: { id: string } }) {
 const user = await prisma.user.findUnique({ where: { id: params.id }, include: { posts: true, comments: true } });
 if (!user) notFound();
 return <div className="space-y-2"><h1 className="text-2xl font-bold">{user.name ?? "Neighbor"}</h1><p>{user.bio ?? "No bio yet."}</p><p>Posts: {user.posts.length} • Comments: {user.comments.length} • Reputation: {user.posts.length + user.comments.length}</p></div>;
}
