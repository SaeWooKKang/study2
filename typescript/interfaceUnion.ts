// use interface union not interface of union

// interface of union
type FirstNames = {
  firstName: 'kim' | 'park'
  basedOn: 'cheong-ju' | 'mil-yang'
}

// interface union (use tagged union)
interface FristNamePark {
  firstName: 'park'
  basedOn: 'mil-yang'
}
interface FristNameKim {
  firstName: 'kim'
  basedOn: 'cheong-ju'
}
type FirstNames2 = FristNamePark | FristNameKim;

