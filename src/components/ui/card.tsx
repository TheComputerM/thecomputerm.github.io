interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
}

export const Card = ({
	title,
	children,
	...props
}: React.PropsWithChildren<CardProps>) => {
	const HorizontalLine = (
		<div className="border-t-2 border-x-2 grow" aria-hidden="true" />
	);

	return (
		<div {...props}>
			<div className="flex items-end gap-2">
				{HorizontalLine}
				<span className="-mb-[0.5em]">{title}</span>
				{HorizontalLine}
			</div>
			<div className="border-x-2 border-b-2 p-4">{children}</div>
		</div>
	);
};
