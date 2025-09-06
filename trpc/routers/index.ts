import { threadsRouter } from "@/modules/threads/server/procedures";
import { createCallerFactory, createTRPCRouter } from "@/trpc/init";

export const appRouter = createTRPCRouter({
	threads: threadsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
