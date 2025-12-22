import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";
import { useEffect, useState } from "react";
import TablerBrandGithubFilled from "~icons/tabler/brand-github-filled";
import TablerBrandLinkedinFilled from "~icons/tabler/brand-linkedin-filled";
import TablerHomeFilled from "~icons/tabler/home-filled";
import TablerMoonFilled from "~icons/tabler/moon-filled";
import TablerSunFilled from "~icons/tabler/sun-filled";
import { Separator } from "./ui/separator";
import { TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const ThemeSwitcher = () => {
	const [darkMode, setDarkMode] = useState(true);

	useEffect(() => {
		if (localStorage.getItem("theme") === "dark") {
			setDarkMode(true);
		} else if (localStorage.getItem("theme") === "light") {
			setDarkMode(false);
		}
	}, []);

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [darkMode]);

	return (
		<button
			type="button"
			onClick={() => setDarkMode((x) => !x)}
			className="cursor-pointer"
			aria-label="Toggle Theme"
		>
			{darkMode ? <TablerSunFilled /> : <TablerMoonFilled />}
		</button>
	);
};

export const Navbar = () => {
	return (
		<nav className="border-b-2 py-4">
			<div className="px-4 sm:px-8 flex justify-between items-center">
				<TooltipProvider>
					<TooltipPrimitive.Root data-slot="tooltip">
						<TooltipTrigger
							render={
								<a href="/" aria-label="Home">
									<TablerHomeFilled />
								</a>
							}
						/>
						<TooltipContent>Home</TooltipContent>
					</TooltipPrimitive.Root>
					<div className="inline-flex items-center gap-4">
						<a href="/projects/1">[Projects]</a>
						<a href="/blog">[Blog]</a>
						<Separator orientation="vertical" />
						<TooltipPrimitive.Root data-slot="tooltip">
							<TooltipTrigger
								render={
									<a
										href="https://github.com/thecomputerm"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="GitHub"
									>
										<TablerBrandGithubFilled />
									</a>
								}
							/>
							<TooltipContent>GitHub</TooltipContent>
						</TooltipPrimitive.Root>
						<TooltipPrimitive.Root data-slot="tooltip">
							<TooltipTrigger
								render={
									<a
										href="https://linkedin.com/in/mudit-somani2004/"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="LinkedIn"
									>
										<TablerBrandLinkedinFilled />
									</a>
								}
							/>
							<TooltipContent>LinkedIn</TooltipContent>
						</TooltipPrimitive.Root>
						<Separator orientation="vertical" />
						<ThemeSwitcher />
					</div>
				</TooltipProvider>
			</div>
		</nav>
	);
};
