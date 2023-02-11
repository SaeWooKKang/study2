// object type => string or number's union
type Person = {
  name: string;
  age: number;
}

type Person2 = keyof Person; // same 'name' | 'age'

const foo = (parameter: Person2) => {}

foo('age') // ok
foo('name') // ok
foo(123) // error

// Reference
// https://www.typescriptlang.org/docs/handbook/2/keyof-types.html#handbook-content