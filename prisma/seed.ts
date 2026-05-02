import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();
const posts = [
  "Best way to get from Grand Anse to St. George’s during rush hour?",
  "Looking for recommendations for a local plumber in St. Andrew",
  "Weekend food pop-up near Grenville",
  "Lost dog seen near Lance Aux Epines",
  "Carriacou ferry schedule discussion",
  "Small business owners: where do you source packaging locally?",
  "Hurricane season preparation checklist"
];

async function main() {
  const passwordHash = await bcrypt.hash("password123", 10);
  const user = await prisma.user.upsert({ where: { email: "user@grenadaboard.local" }, update: {}, create: { email: "user@grenadaboard.local", name: "Local Neighbor", passwordHash, role: "USER", parish: "SAINT_GEORGE" } });
  await prisma.user.upsert({ where: { email: "mod@grenadaboard.local" }, update: {}, create: { email: "mod@grenadaboard.local", name: "Community Mod", passwordHash, role: "MODERATOR", parish: "SAINT_ANDREW" } });
  const categories = ["General","News & Local Updates","Events","Jobs & Opportunities","Housing & Rentals","Buy / Sell / Trade","Lost & Found","Travel & Transport","Food & Culture","Government & Public Services","Small Business","Safety & Weather","Diaspora"];
  for (const name of categories) await prisma.category.upsert({ where: { slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-") }, update: {}, create: { name, slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-") } });
  const cat = await prisma.category.findFirstOrThrow();
  for (const title of posts) await prisma.post.upsert({ where: { slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-") }, update: {}, create: { title, slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""), body: `${title}\n\nSharing this for community input and helpful local knowledge.`, authorId: user.id, categoryId: cat.id, parish: "SAINT_GEORGE" } });
}

main().finally(async () => prisma.$disconnect());
