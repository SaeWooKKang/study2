// If use type of any, use as narrowly as possible

const arr: any = []; // 😥

const arr2: any[] = [] // not good but better 😅

const obj: { [preoperty: string]: any } = {}

// Check if allocation is possible
const foo: any = 'foo' as any // can

const foo3: string = 'foo' as unknown // error

// unknown only allocation any type
const foo2: any = 'foo' as unknown // can

// type-coverage
// npx type-coverage
// npx type-coverage --detail
