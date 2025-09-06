import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ThreadForm } from "@/modules/threads/ui/components/thread-form";

export const ThreadCreateView = () => {
	return (
		<div className="w-full">
			<Card className="mx-auto mt-12">
				<CardHeader>
					<CardTitle>Start a new thread</CardTitle>
					<CardDescription>You can start a new thread here.</CardDescription>
				</CardHeader>

				<CardContent>
					<ThreadForm />
				</CardContent>
			</Card>
		</div>
	);
};
