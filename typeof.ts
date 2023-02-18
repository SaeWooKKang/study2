const tuple = ['tesla', 'model 3'] as const

const tuple2: typeof tuple = ['tesla', 'model 3'] // ok

const tuple3: typeof tuple = ['tesla', 'model 3', 'foo'] // error

// Reference
// https://www.typescriptlang.org/docs/handbook/2/typeof-types.html#handbook-contentf