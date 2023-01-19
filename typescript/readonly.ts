const func = (arr: readonly number[]) => {
  arr.slice(-1) /// ok
  arr.pop() // error
}

func([11,12,13]) // type: readonly number[]

const arr: readonly number[] = [1,2,3];
const arr2: number[] = arr; // error
const arr3: readonly number[] = [1,2,3]


// reference
// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#readonly-and-const