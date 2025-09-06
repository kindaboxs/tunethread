import { z } from "zod";

export const threadInsertSchema = z.object({
	title: z
		.string()
		.min(1, { message: "Title is required" })
		.max(100, { message: "Title is too long" }),
	content: z
		.string()
		.min(1, { message: "Content is required" })
		.max(1500, { message: "Content is too long" }),
});

export type ThreadInsertSchema = z.infer<typeof threadInsertSchema>;
