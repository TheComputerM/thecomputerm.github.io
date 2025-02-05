import { Tooltip } from "@ark-ui/solid";
import type { Component, JSX, ParentComponent } from "solid-js";
import { Portal } from "solid-js/web";
import { css } from "styled-system/css";
import { Container, Divider, HStack } from "styled-system/jsx";
import { tooltip } from "~/styles/tooltip";
import TablerBrandGithubFilled from "~icons/tabler/brand-github-filled";
import TablerBrandLinkedinFilled from "~icons/tabler/brand-linkedin-filled";
import TablerHomeFilled from "~icons/tabler/home-filled";

const NavItem: ParentComponent<JSX.AnchorHTMLAttributes<HTMLAnchorElement>> = (
	props,
) => {
	return (
		<Tooltip.Root
			positioning={{ placement: "bottom" }}
			openDelay={100}
			closeDelay={200}
		>
			<Tooltip.Trigger
				asChild={(forwardProps) => <a {...forwardProps} {...props} />}
			/>
			<Portal>
				<Tooltip.Positioner>
					<Tooltip.Content class={tooltip.content}>
						{props["aria-label"]}
					</Tooltip.Content>
				</Tooltip.Positioner>
			</Portal>
		</Tooltip.Root>
	);
};

const Navbar: Component = () => {
	return (
		<nav class={css({ borderBottomWidth: "normal" })}>
			<Container>
				<HStack height="12" justify="space-between">
					<NavItem href="/" aria-label="Home">
						<TablerHomeFilled />
					</NavItem>
					<HStack gap="4">
						<a href="/projects/1">Projects</a>
						<a href="/blog">Blog</a>
						<Divider orientation="vertical" thickness="2" height="1em" />
						<NavItem
							href="https://github.com/TheComputerM"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub"
						>
							<TablerBrandGithubFilled />
						</NavItem>
						<NavItem
							href="https://www.linkedin.com/in/mudit-somani2004/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
						>
							<TablerBrandLinkedinFilled />
						</NavItem>
					</HStack>
				</HStack>
			</Container>
		</nav>
	);
};

export default Navbar;
