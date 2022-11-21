let lname : string;

lname = "hudir";

let newname = lname.toUpperCase()

// default value
let isValid : boolean = true

// console.log(isValid) => undefined

let empList : string[]

empList = ["sa", "so", "sla"]

let numList : Array<number>

numList = [1,2,3,4,5];

let result = numList.filter(n => n > 2)

let num = numList.find( x => x == 2)

let emp = empList.find( p => p =="sa")

console.log(result);
console.log(num);
console.log(emp)

let sum = numList.reduce((acc,x)=>acc + x)
console.log(sum)

enum Color {
    Red, 
    Green,
    Blue
}

let c: Color = Color.Blue