import { threadInsertSchema } from "@/modules/threads/schemas";
import { createTRPCRouter, publicProcedure } from "@/trpc/init";

export const threadsRouter = createTRPCRouter({
	create: publicProcedure
		.input(threadInsertSchema)
		.mutation(async ({ ctx, input }) => {
			const thread = await ctx.db.thread.create({
				data: {
					...input,
				},
			});

			return thread;
		}),
});
