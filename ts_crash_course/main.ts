export {}
let message = 'Hello World';
console.log(message)

// variable declaration.
/** 
 * let and const
 * 
 * let for when vars can change.
 * const for constants
 * 
 * let variable doesn't need to be init
 * const had to be init */
let age = 10
const year = 2001


// variable types

// let varName: vartype = varValue

let isBeginner: boolean = true;
let total: number = 0;
let name: string = "John";

let sentence: string = `My name is ${name}
I am a beginner in Typescript`;

console.log(sentence);

// null and undefined are subtypes.
let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

// arrays

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];
let person1: [string, number] = ['chris', 22];

enum Color {Red, Green, Blue};

let c: Color = Color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = "string long"

// type unknown

let myVariable: unknown = "Joey";

// type assersion/casting 

myVariable = (myVariable as string).toUpperCase();

console.log(myVariable);

// multitype

let multiType: number | boolean;

multiType = 20;
multiType = true;

// Functions
// all params required
function add(num1: number, num2: number): number{
    return num1 + num2;
}

console.log(add(5,10));

// Functions
// all params not required
function add2(num1: number, num2?: number): number{
    if (num2)
      return num1 + num2;
    else
      return num1
}

console.log(add2(5,10));
console.log(add2(5));

