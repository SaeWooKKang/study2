const arr = ['a', 'b', 'c']

typeof arr // object

// object의 key는 ==> string | Symbol | number
// key가 객체일 경우 Object.toString 호출로 문자로 바꿈

arr[0] // 'a'
arr['0'] // 'a'

Object.keys(arr) // ['0', '1','2']

interface Array<T> {
  [n: number]: T; // 
}

for (const key in arr) {
  key // string;

  arr[key] // 실용적인 허용
}
