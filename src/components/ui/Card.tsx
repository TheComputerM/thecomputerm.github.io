import type { ParentComponent } from "solid-js";
import { css } from "styled-system/css";
import { Box, HStack } from "styled-system/jsx";

export const Card: ParentComponent<{ title: string }> = (props) => {
	const HorizontalLine = (
		<Box
			borderTopWidth="normal"
			borderLeftWidth="normal"
			borderStyle="solid"
			flexGrow="1"
			aria-hidden="true"
		/>
	);

	return (
		<Box>
			<HStack alignItems="end">
				{HorizontalLine}
				<span class={css({ marginBottom: "-0.5em" })}>{props.title}</span>
				{HorizontalLine}
			</HStack>
			<Box
				borderStyle="solid"
				borderLeftWidth="normal"
				borderRightWidth="normal"
				borderBottomWidth="normal"
				p="4"
			>
				{props.children}
			</Box>
		</Box>
	);
};
