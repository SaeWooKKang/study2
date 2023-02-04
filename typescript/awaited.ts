// Awaited<type>:: recursively unwrap Promise

const p = Promise.resolve('p') // Promise<string>

const str:p = 'abc' // error

type foo = Awaited<Promise<string>> // string

const str2:foo = 'abc' // ok

// Reference
// https://www.typescriptlang.org/docs/handbook/utility-types.html