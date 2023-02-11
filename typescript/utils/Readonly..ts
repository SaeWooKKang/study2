type Readonly2<T> = {
  readonly [P in keyof T]: T[P];
}