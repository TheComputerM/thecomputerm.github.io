import {
	type Component,
	For,
	type JSX,
	Show,
	createUniqueId,
	mergeProps,
	splitProps,
} from "solid-js";
import { css, cx } from "styled-system/css";

export interface GridPatternProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
	class?: string;
	height?: number;
	squares?: Array<[x: number, y: number]>;
	strokeDasharray?: string;
	width?: number;
	x?: number;
	y?: number;
}

export const GridPattern: Component<GridPatternProps> = (
	props: GridPatternProps,
) => {
	const [_localProps, forwardProps] = splitProps(props, [
		"class",
		"height",
		"squares",
		"strokeDasharray",
		"width",
		"x",
		"y",
	]);
	const localProps = mergeProps(
		{ width: 40, height: 40, x: -1, y: -1, strokeDasharray: "0", squares: [] },
		_localProps,
	);
	const id = createUniqueId();

	return (
		<svg
			aria-hidden="true"
			class={cx(
				css({
					pointerEvents: "none",
					position: "absolute",
					inset: "0",
					height: "full",
					width: "full",
					fill: "gray.400/30",
					stroke: "gray.400/30",
				}),
				localProps.class,
			)}
			{...forwardProps}
		>
			<defs>
				<pattern
					id={id}
					width={localProps.width}
					height={localProps.height}
					patternUnits="userSpaceOnUse"
					x={localProps.x}
					y={localProps.y}
				>
					<path
						d={`M.5 ${localProps.height}V.5H${localProps.width}`}
						fill="none"
						stroke-dasharray={localProps.strokeDasharray}
					/>
				</pattern>
			</defs>
			<rect width="100%" height="100%" stroke-width={0} fill={`url(#${id})`} />
			<Show when={localProps.squares}>
				<svg
					x={localProps.x}
					y={localProps.y}
					class={css({ overflow: "visible" })}
					aria-hidden="true"
				>
					<For each={localProps.squares}>
						{([x, y]) => (
							<rect
								stroke-width="0"
								width={localProps.width - 1}
								height={localProps.height - 1}
								x={x * localProps.width + 1}
								y={y * localProps.height + 1}
							/>
						)}
					</For>
				</svg>
			</Show>
		</svg>
	);
};
