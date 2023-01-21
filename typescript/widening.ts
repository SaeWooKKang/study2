let rice = 'rice' // type: tring (because widening)

type Menu = 'rice' | 'milk'

function printMenu(menu: Menu) {
  console.log(menu)
}

printMenu(rice) // error

const milk = 'milk' // type: 'milk'

printMenu(milk) // ok
