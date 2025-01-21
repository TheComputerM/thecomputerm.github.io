import { Clipboard, Tooltip } from "@ark-ui/solid";
import type { Component } from "solid-js";
import { Portal } from "solid-js/web";
import { css } from "styled-system/css";
import { tooltip } from "~/styles/tooltip";
import TablerCopy from "~icons/tabler/copy";
import TablerTerminal from "~icons/tabler/terminal";

export const TermViewCommand: Component<{ value: string }> = (props) => {
	return (
		<Tooltip.Root positioning={{ placement: "bottom" }} openDelay={200}>
			<Clipboard.Root value={`curl ${props.value}`}>
				<Tooltip.Trigger
					asChild={(forwardProps) => (
						<Clipboard.Control
							class={css({ display: "flex", alignItems: "center", gap: "1" })}
							{...forwardProps}
						>
							<Clipboard.Input
								class={css({
									textOverflow: "ellipsis",
									height: "6",
									width: "full",
								})}
							/>
							<Clipboard.Trigger
								class={css({
									backgroundColor: "fg.default",
									color: "bg.default",
									aspectRatio: "square",
									width: "6",
									height: "6",
									display: "inline-flex",
									justifyContent: "center",
									alignItems: "center",
								})}
							>
								<Clipboard.Indicator copied={<TablerTerminal />}>
									<TablerCopy />
								</Clipboard.Indicator>
							</Clipboard.Trigger>
						</Clipboard.Control>
					)}
				/>
			</Clipboard.Root>
			<Portal>
				<Tooltip.Positioner>
					<Tooltip.Content class={tooltip.content}>
						view page on your terminal
					</Tooltip.Content>
				</Tooltip.Positioner>
			</Portal>
		</Tooltip.Root>
	);
};
