const addNumbers = (a:number,b:number) => {
    return a + b
}

console.log(addNumbers(67,10))

//add default value
export const addString = (str1: string, str2: string = 'Dele'): string => `${str1} ${str2}`

console.log(addString('Afolabi', 'Sodiq'))
console.log(addString('Afolabi'))

//union type
export const uniontype = (title: string, param: string | number) => {
    return `${title} ${param}`
}

console.log(uniontype('hello', 56))
console.log(uniontype('hello', 'world'))

// void function
export const printFormat = (title: string, param: string | number):void => {
    console.log(uniontype(title, param))
}

console.log(printFormat('56',90))

//promise function
const fetcData = (url:string):Promise<string> => Promise.resolve(`Data is ${url}`)

//defining multiple argument
export const introduction = (salutation: string, ...names:  string[]):string => {
    return `${salutation} ${names.join(', ')}`
}

console.log(introduction('hello','Ade','Sope','idowu'))
console.log(introduction('I love', 'Music','Art', 'Movie'))

export default addNumbers