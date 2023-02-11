// implematation of Pick

// K extends keyof T:: K는 T의 부분집합이다.
type Pick2<T, K extends keyof T> = {
  [P in K]: T[P];
}

type Person = {
  name: string;
  age: number;
  height: number;
  weight: number;
}

type PickedType = Pick2<Person, 'name' | 'age'>