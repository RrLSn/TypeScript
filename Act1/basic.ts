let username: string = 'Afolabi'
let hasLoggedIn: boolean = true
let myNumber: number = 9
let myRegex: RegExp = /foo/

const names: string[] = username.split('')
console.log(names)

//define an array with typescript
const values: Array<number> = [9]
let loggedIn: Array<boolean> = [false]
let user: Array<string> = ["Sodiq"]

console.log(myNumber)
console.log(username)

const myPerson: {
    first: string;
    last: string;
    age: number;
    loggedin: boolean;
    regExp: RegExp;
    user: Array<string>;
    values: Array<boolean>;
} = {
    first: "Afolabi",
    last: "Sodiq",
    age: 5,
    loggedin: false,
    regExp: /foo/,
    user: ['Explain'],
    values: [false]
}

console.log(myPerson)

// using utility type Record to define the key and the value of an arr of object
const myID: Record<number,string> = {
    10: 'a',
    20: 'b',
    30: 'c',
}

myID[40] = "d"
myID[50] = 'e'
myID[60] = 'f'

console.log(myID)

type weekDays = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday'

type Schedule = Record<weekDays,string>

const schedule: Schedule = {
    Monday: 'Work',
    Tuesday: 'Gym',
    Wednesday: 'Meeting',
    Thursday: 'Date night',
    Friday: 'Party'
}

console.log(schedule)

//define conditionals and expressions with typesript
if(myID[40] === 'd'){}
if (myPerson.first === 'Asokoro'){}

for(let i=0; i<10; i++){
    console.log(i)
}

values.forEach((value) => console.log(value));
[1,2,3,4,5,6].forEach((n) => console.log(n));

const sumMap: number[] = [1,2,3,4,5,6].map((v) => v*2)

console.log(sumMap)