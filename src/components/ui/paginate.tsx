import type { Page } from "astro";
import { cn } from "@/lib/utils";
// import TablerCaretLeftFilled from "~icons/tabler/caret-left-filled";
// import TablerCaretRightFilled from "~icons/tabler/caret-right-filled";

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
			className={cn(
				"reset border-2 border-foreground size-10 inline-flex items-center justify-center cursor-pointer",
				active
					? "bg-foreground text-background"
					: "hover:border-secondary-foreground",

				className,
			)}
			{...props}
		/>
	);
}

export function AstroPagination({ page }: { page: Page }) {
	return (
		<Pagination>
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
		</Pagination>
	);
}
