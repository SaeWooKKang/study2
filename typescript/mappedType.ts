type Person = {
    name: string;
    age: number;
}

type MappedPerson = {
 [Property in keyof Person]: boolean;
}

type MappedGeneric<T> = {
    [Property in keyof T]: boolean;
}

// compose of index signiture syntax

// reference
// https://www.typescriptlang.org/ko/docs/handbook/2/mapped-types.html