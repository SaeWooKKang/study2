// Indexed Access Type (indexing Type)

type Car = {
  type: 'electric' | 'gasoline';
  mileage: number;
}

type CarType = Car['type'] // 'electric' | 'gasoline';

type CarTypeee = Car['typeeee'] // error

type Cars = Car[];

type Car2 = Cars[number] 
// { 
//    type: 'electric' | 'gasoline'; 
//    mileage: number 
// }

type Car3 = Cars[number]['type'] // type: 'electric' | 'gasoline'; 