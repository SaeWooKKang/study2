type ComplexType = {
	a: string;
	b: number;
} & Omit<{ c: boolean } & Record<"d", string[]>, "c">;

type Prettify<T> = {
	[K in keyof T]: T[K];
} & {};

type ShowMe = Prettify<ComplexType>;
