import Link from "next/link";

import { NavigationHeader } from "@/components/global/site-header/navigation-header";
import { ToggleModeHeader } from "@/components/global/site-header/toggle-mode-header";

export const SiteHeader = () => {
	return (
		<header className="bg-background/85 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 h-14 w-full border-b backdrop-blur">
			<div className="container flex h-full items-center justify-between p-4">
				<Link href="/" className="text-2xl font-bold">
					tunethread
				</Link>

				<div className="flex items-center space-x-4">
					<ToggleModeHeader />
					<NavigationHeader />
				</div>
			</div>
		</header>
	);
};
