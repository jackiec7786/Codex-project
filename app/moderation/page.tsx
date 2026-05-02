import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export default async function Moderation(){
 const session = await auth();
 const me = session?.user?.email ? await prisma.user.findUnique({ where: { email: session.user.email } }) : null;
 if (!me || (me.role !== "MODERATOR" && me.role !== "ADMIN")) return <p>Unauthorized</p>;
 const reports = await prisma.report.findMany({ where: { status: "OPEN" }, include: { post: true, comment: true } });
 return <div><h1 className="text-2xl font-bold">Moderation dashboard</h1>{reports.map(r=><div key={r.id} className="my-2 rounded border p-3"><p>{r.reason}</p></div>)}</div>
}
