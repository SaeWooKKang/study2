let rice = 'rice' // type: string (because widening)

type Menu = 'rice' | 'milk'

function printMenu(menu: Menu) {
  console.log(menu)
}

printMenu(rice) // error

const milk = 'milk' // type: 'milk'

printMenu(milk) // ok

// example 2
function getTuple(tuple: [number, number]) {}

const res1 = [10, 20] // type: number[] (because widening)
getTuple(res1) // type error 

const res2 = [10, 20] as const // type: readonly [10, 20]
getTuple(res2) // type error

const res3:[number, number] = [10, 20] // type: [number, number]
getTuple(res3) // ok
