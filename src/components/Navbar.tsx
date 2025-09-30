import { Tooltip } from "@base-ui-components/react/tooltip";
import { type ComponentProps, useEffect, useState } from "react";
import TablerBrandGithubFilled from "~icons/tabler/brand-github-filled";
import TablerBrandLinkedinFilled from "~icons/tabler/brand-linkedin-filled";
import TablerHomeFilled from "~icons/tabler/home-filled";
import TablerMoonFilled from "~icons/tabler/moon-filled";
import TablerSunFilled from "~icons/tabler/sun-filled";

const NavTooltip = (props: ComponentProps<"a">) => {
	return (
		<Tooltip.Root>
			<Tooltip.Trigger>
				<a className="block" {...props} />
			</Tooltip.Trigger>
			<Tooltip.Portal>
				<Tooltip.Positioner side="bottom" sideOffset={8}>
					<Tooltip.Popup className="bg-foreground text-background py-1 px-1.5">
						{props["aria-label"]}
					</Tooltip.Popup>
				</Tooltip.Positioner>
			</Tooltip.Portal>
		</Tooltip.Root>
	);
};

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

	function toggle() {
		setDarkMode((x) => !x);
	}

	return (
		<button
			type="button"
			onClick={toggle}
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
				<Tooltip.Provider delay={200}>
					<NavTooltip href="/" aria-label="Home">
						<TablerHomeFilled />
					</NavTooltip>
					<div className="inline-flex items-center gap-4">
						<a href="/projects/1">[Projects]</a>
						<a href="/blog">[Blog]</a>
						<hr aria-orientation="vertical" className="border-l-2 h-4" />
						<NavTooltip
							href="https://github.com/thecomputerm"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub"
						>
							<TablerBrandGithubFilled />
						</NavTooltip>
						<NavTooltip
							href="https://linkedin.com/in/mudit-somani2004/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
						>
							<TablerBrandLinkedinFilled />
						</NavTooltip>
						<hr aria-orientation="vertical" className="border-l-2 h-4" />
						<ThemeSwitcher />
					</div>
				</Tooltip.Provider>
			</div>
		</nav>
	);
};
