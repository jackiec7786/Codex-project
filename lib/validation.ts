import { z } from "zod";
export const createPostSchema = z.object({ title: z.string().min(8).max(140), body: z.string().min(20).max(5000), categoryId: z.string().min(1), parish: z.string().min(1), tags: z.string().optional(), imageUrl: z.string().url().optional().or(z.literal("")) });
export const commentSchema = z.object({ postId: z.string(), body: z.string().min(2).max(1000), parentId: z.string().optional() });
