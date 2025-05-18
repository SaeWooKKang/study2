export {};

type Person = {
	name: string;
	age: number;
};

type MappedPerson = {
	[Property in keyof Person]: boolean;
};

type MappedGeneric<T> = {
	[Property in keyof T]: boolean;
};

// compose of index signature syntax

// reference
// https://www.typescriptlang.org/ko/docs/handbook/2/mapped-types.html

type User = {
	[Property in keyof Person as Capitalize<Property>]: Person[Property];
};

type GetUser = {
	[Property in keyof Person as `get${Capitalize<Property>}`]: () => Person[Property];
};
