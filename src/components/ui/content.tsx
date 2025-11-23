import { GridPattern } from "./grid";

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
		<div className="bg-background border-2 min-w-0 md:shadow-[8px_8px_0_0] shadow-muted-foreground">
			<div className="m-4 sm:m-8 prose">{props.children}</div>
		</div>
	);
};
