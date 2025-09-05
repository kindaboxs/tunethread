"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MenuIcon } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerPortal,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";

const navItems = [
	{
		name: "Find",
		href: "/threads",
	},
	{
		name: "Create",
		href: "/threads/create",
	},
	{
		name: "History",
		href: "/history",
	},
];

export const NavigationHeader = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const pathname = usePathname();

	return (
		<>
			<nav className="hidden items-center gap-x-2 md:flex">
				{navItems.map((item) => (
					<Link
						key={item.name}
						href={item.href}
						className={cn(
							buttonVariants({
								variant: pathname === item.href ? "secondary" : "ghost",
								size: "sm",
							})
						)}
					>
						{item.name}
					</Link>
				))}
			</nav>

			<div className="flex items-center gap-x-2 md:hidden">
				<Drawer open={isOpen} onOpenChange={setIsOpen}>
					<DrawerTrigger asChild>
						<Button variant="outline" size="icon" className="size-8">
							<MenuIcon /> <span className="sr-only">Mobile Menu</span>
						</Button>
					</DrawerTrigger>

					<DrawerPortal>
						<DrawerOverlay />
						<DrawerContent>
							<DrawerHeader>
								<DrawerTitle>Navigation</DrawerTitle>
								<DrawerDescription>Select an option below</DrawerDescription>
							</DrawerHeader>

							<div className="flex flex-col gap-2 px-4">
								{navItems.map((item) => (
									<DrawerClose asChild key={item.name}>
										<Link
											href={item.href}
											className={cn(
												buttonVariants({
													variant:
														pathname === item.href ? "default" : "secondary",
													size: "sm",
												})
											)}
										>
											{item.name}
										</Link>
									</DrawerClose>
								))}
							</div>

							<DrawerFooter>
								<DrawerClose asChild>
									<Button variant="outline" size="sm" className="w-full">
										Close
									</Button>
								</DrawerClose>
							</DrawerFooter>
						</DrawerContent>
					</DrawerPortal>
				</Drawer>
			</div>
		</>
	);
};
