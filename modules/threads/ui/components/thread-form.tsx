"use client";

import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2Icon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	threadInsertSchema,
	type ThreadInsertSchema,
} from "@/modules/threads/schemas";
import { useTRPC } from "@/trpc/client";

export const ThreadForm = () => {
	const router = useRouter();

	const trpc = useTRPC();

	const form = useForm<ThreadInsertSchema>({
		resolver: zodResolver(threadInsertSchema),
		defaultValues: {
			title: "",
			content: "",
		},
		mode: "all",
	});

	const createThread = useMutation(
		trpc.threads.create.mutationOptions({
			onSuccess: async (data) => {
				toast.success("Your thread has been created.");

				router.push(`/threads/${data.id}`);
			},

			onError: (error) => {
				toast.error("Oops, something went wrong.", {
					description: error.message,
				});
			},
		})
	);

	const isPending = createThread.isPending;

	const onSubmit = async (data: ThreadInsertSchema) => {
		await createThread.mutateAsync(data);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-8">
				<div className="grid gap-4">
					<FormField
						control={form.control}
						name="title"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Title</FormLabel>
								<FormControl>
									<Input placeholder="Title" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="content"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Content</FormLabel>
								<FormControl>
									<Textarea placeholder="Content" rows={6} {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<Button type="submit" className="w-full" disabled={isPending}>
					{isPending ? (
						<>
							<Loader2Icon className="animate-spin" /> Creating...
						</>
					) : (
						"Create Thread"
					)}
				</Button>
			</form>
		</Form>
	);
};
