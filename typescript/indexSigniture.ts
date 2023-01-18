type IndexSigniture = {
  [propertyName: string]: string; 
}

const foo: IndexSigniture = {} // ok

const bar: IndexSigniture = {
  b: 'c',
  d: 'f' ,
  e: ''
} // ok

const zoo: IndexSigniture = {
  e: 1 
} // type error

type IndexSigniture2 = {
  [foo: string]: string; // ok
  length: number; // error
  name: string;
}

type IndexSigniture3 = {
  [foo: string]: string | number; // ok
  length: number; // ok
  name: string; // ok
}

type IndexSigniture4 = {
  readonly [foo: string]: string;
}

const foo0: IndexSigniture4 = {bar: 'bar'};

foo0.bar = 'zoo'; // Index signature in type 'IndexSigniture' only permits reading.

// - - - - - - - - - - - - -

// 장점
// - 유연한 mapping

// 단점
// - property 자동 완성 x
// - property 마다 다른 타입을 가질 수 없음. 무조건 indexSigniture 타입.

// Reference
// [Index Signiture]: https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures

// Associated
// [dictionary]: https://linuxhint.com/javascript-objects-dictionary/
