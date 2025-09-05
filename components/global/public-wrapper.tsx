import { SiteHeader } from "@/components/global/site-header";

interface Props {
	children: React.ReactNode;
}

export const PublicWrapper = ({ children }: Props) => {
	return (
		<>
			<div className="flex min-h-svh flex-col">
				<SiteHeader />
				<main className="container grow p-4">{children}</main>
				<footer className="p-4 text-center">
					<p className="text-muted-foreground text-sm">
						&copy; {new Date().getFullYear()} tunethread
					</p>
				</footer>
			</div>
		</>
	);
};
