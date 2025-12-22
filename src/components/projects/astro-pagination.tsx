import type { Page } from "astro";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

export function AstroPagination({ page }: { page: Page }) {
	return (
		<Pagination>
			<PaginationContent className="gap-2">
				<PaginationItem>
					<PaginationPrevious
						href={page.url.prev}
						aria-disabled={!!page.url.prev}
					/>
				</PaginationItem>
				{Array.from({ length: page.lastPage })
					.map((_, i) => i + 1)
					.map((i) => (
						<PaginationItem key={i}>
							<PaginationLink
								key={i}
								href={`/projects/${i}`}
								isActive={page.currentPage === i}
							>
								{i}
							</PaginationLink>
						</PaginationItem>
					))}
				<PaginationItem>
					<PaginationNext href={page.url.next} />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
