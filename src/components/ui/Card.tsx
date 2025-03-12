import { type ParentComponent, splitProps } from "solid-js";
import { css } from "styled-system/css";
import { Box, type BoxProps, HStack } from "styled-system/jsx";

interface CardProps extends BoxProps {
	title: string;
}

export const Card: ParentComponent<CardProps> = (_props) => {
	const [props, boxProps] = splitProps(_props, ["title", "children"]);
	const HorizontalLine = (
		<Box
			borderTopWidth="base"
			borderInlineWidth="base"
			borderStyle="solid"
			flexGrow="1"
			aria-hidden="true"
		/>
	);

	return (
		<Box {...boxProps}>
			<HStack alignItems="end">
				{HorizontalLine}
				<span class={css({ marginBottom: "-0.5em" })}>{props.title}</span>
				{HorizontalLine}
			</HStack>
			<Box
				borderStyle="solid"
				borderInlineWidth="base"
				borderBottomWidth="base"
				p="4"
			>
				{props.children}
			</Box>
		</Box>
	);
};
