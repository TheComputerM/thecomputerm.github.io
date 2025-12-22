import { useId } from "react";

import { cn } from "@/lib/utils";

interface GridPatternProps extends React.SVGProps<SVGSVGElement> {
	width?: number;
	height?: number;
	x?: number;
	y?: number;
	squares?: Array<[x: number, y: number]>;
	strokeDasharray?: string;
}

export function GridPattern({
	width = 40,
	height = 40,
	x = -1,
	y = -1,
	strokeDasharray = "0",
	squares,
	className,
	...props
}: GridPatternProps) {
	const id = useId();

	return (
		<svg
			aria-hidden="true"
			className={cn(
				"pointer-events-none absolute inset-0 h-full w-full stroke-zinc-400/25",
				className,
			)}
			{...props}
		>
			<defs>
				<pattern
					id={id}
					width={width}
					height={height}
					patternUnits="userSpaceOnUse"
					x={x}
					y={y}
				>
					<path
						d={`M.5 ${height}V.5H${width}`}
						fill="none"
						strokeDasharray={strokeDasharray}
					/>
				</pattern>
			</defs>
			<rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
			{squares && (
				<svg x={x} y={y} className="overflow-visible" aria-hidden="true">
					{squares.map(([x, y]) => (
						<rect
							strokeWidth="0"
							key={`${x}-${y}`}
							width={width - 1}
							height={height - 1}
							x={x * width + 1}
							y={y * height + 1}
						/>
					))}
				</svg>
			)}
		</svg>
	);
}

export const GridBackground = (props: React.PropsWithChildren) => {
	return (
		<div className="relative grid place-content-center gap-12 px-4 py-24">
			{props.children}
			<GridPattern
				width={30}
				height={30}
				className="absolute -z-1 mask-[linear-gradient(to_bottom,transparent,white_18rem_calc(100%-18rem),transparent)]"
			/>
		</div>
	);
};

export const ContentContainer = (props: React.PropsWithChildren) => {
	return (
		<div className="bg-background border-2 min-w-0 md:shadow-[8px_8px_0_0] shadow-ring">
			<div className="m-4 sm:m-8 prose">{props.children}</div>
		</div>
	);
};
