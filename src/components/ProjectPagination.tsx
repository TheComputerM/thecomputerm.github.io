import type { CollectionEntry } from "astro:content";
import { navigate } from "astro:transitions/client";
import { Pagination } from "@ark-ui/solid";
import type { Page } from "astro";
import { type Component, For } from "solid-js";
import { paginationStyles } from "~/styles/pagination";
import TablerChevronLeft from "~icons/tabler/chevron-left";
import TablerChevronRight from "~icons/tabler/chevron-right";

export const ProjectPagination: Component<{
	page: Page<CollectionEntry<"projects">>;
}> = (props) => {
	return (
		<Pagination.Root
			count={props.page.total}
			pageSize={props.page.size}
			page={props.page.currentPage}
			onPageChange={(details) => navigate(`/projects/${details.page}`)}
			class={paginationStyles.root}
		>
			<Pagination.PrevTrigger class={paginationStyles.trigger}>
				<TablerChevronLeft />
			</Pagination.PrevTrigger>
			<Pagination.Context>
				{(api) => (
					<For each={api().pages}>
						{(page, index) =>
							page.type === "page" ? (
								<Pagination.Item {...page} class={paginationStyles.item}>
									{page.value}
								</Pagination.Item>
							) : (
								<Pagination.Ellipsis index={index()}>
									&#8230;
								</Pagination.Ellipsis>
							)
						}
					</For>
				)}
			</Pagination.Context>
			<Pagination.NextTrigger class={paginationStyles.trigger}>
				<TablerChevronRight />
			</Pagination.NextTrigger>
		</Pagination.Root>
	);
};
