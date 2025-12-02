import type { Page } from "astro";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./button";
import TablerCaretLeftFilled from "~icons/tabler/caret-left-filled";
import TablerCaretRightFilled from "~icons/tabler/caret-right-filled";

export function Pagination({
	className,
	...props
}: React.ComponentProps<"nav">) {
	return (
		<nav
			aria-label="pagination"
			className={cn("flex items-center justify-center gap-3", className)}
			{...props}
		/>
	);
}

type PaginationLinkProps = React.ComponentProps<"a"> & {
	active?: boolean;
};

export function PaginationLink({
	className,
	active,
	...props
}: PaginationLinkProps) {
	return (
		<a
			data-active={active}
			className={buttonVariants({
				variant: active ? "default" : "outline",
				size: "icon-lg",
				className: `reset ${className}`,
			})}
			{...props}
		/>
	);
}

export function AstroPagination({ page }: { page: Page }) {
	return (
		<Pagination>
			{page.url.prev && (
				<a
					href={page.url.prev}
					aria-disabled={!page.url.prev}
					aria-label="Previous page"
					className={buttonVariants({
						size: "icon-lg",
						variant: "ghost",
						className: "reset",
					})}
				>
					<TablerCaretLeftFilled />
				</a>
			)}

			{Array.from({ length: page.lastPage })
				.map((_, i) => i + 1)
				.map((i) => (
					<PaginationLink
						key={i}
						active={i === page.currentPage}
						href={`/projects/${i}`}
					>
						{i}
					</PaginationLink>
				))}
			{page.url.next && (
				<a
					href={page.url.next}
					aria-label="Next page"
					className={buttonVariants({
						size: "icon-lg",
						variant: "ghost",
						className: "reset",
					})}
				>
					<TablerCaretRightFilled />
				</a>
			)}
		</Pagination>
	);
}
