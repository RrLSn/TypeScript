import { type } from "os"

// Creating a function that takes a function as a parameter
export function printFile(text: number, callback:() => void):void {
    console.log(text)
    callback()
}

export function arrayMutation(numbers: number[], mutate:(v:number) => number):number[] {
    return numbers.map(mutate)
}

console.log(arrayMutation([1,2,3,4,5], (v) => v * 50))

export function arrayString(name: string[], intro:(n:string) => string):string[] {
    return name.map(intro)
}

console.log(arrayString(["56","100","200","500"],(n) => n))

type mutationFunction = (v:number) => number

export function mutationExp(numbers: number[], callback:mutationFunction): number[]{
    return numbers.map(callback)
}

console.log(mutationExp([10,20,30,40,50,60], (v) => v * 100))


// Function that return function
type adderFunction = (val: number) => number
export function createAdder(num:number) : adderFunction{
    return (val:number) => val + num
}

const addNum = createAdder(10)
console.log(addNum(55))

type greetingFunction = (sal:string) => string
export function greeting(greet:string) : greetingFunction{
    return (sal:string) => greet + " " + sal
}

const sayGreetings = greeting("Hello")
console.log(sayGreetings('World'))