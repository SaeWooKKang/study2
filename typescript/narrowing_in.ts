type Fish = { swim: () => void }
type Human = { walk: () => void }

function move(animal: Fish | Human) {
  if ('swim' in animal) {
    animal.swim()
    return
  }
  animal.walk()
}

// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing