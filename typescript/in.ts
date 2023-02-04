type Job = 'programer' | 'doctor'

type foo = {
    [P in Job]: string;
}

const Job: foo = {
    programer: 'a',
    doctor: 'b'
}

// in + keyof 

// same type:: Person === Person1 === Person2 === Person3
type Person = {
    name: string;
    height: number;
    weight: number;
}

type Person1 = {
    [k in keyof Person]: string;
}

type Person2 = { 
    [k in 'name' | 'height' | 'weight']: string;
}

type Person3 = {
    name: string;
    height: string;
    weight: string;
}

const p1: Person1 = {
    name: '',
    height: '',
    weight: ''
} // ok

const p2: Person2 = {
    name: '',
    height: '',
    weight: ''
} // ok

const p3: Person3 = {
    name: '',
    height: '',
    weight: ''
} // ok