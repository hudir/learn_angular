let sales = 123_456_789;
let course = "TypeScript";
let is_published = true;

let level

const render = (doc: any) => {
    console.log(doc)
}

let numbers: number[] = [];
numbers.forEach(n => n.toFixed(2))

// tuples  1, "mosh"
let user: [number, string] = [1, 'hudir']
user.push(1);// this will not going to alerm


// PascalCase
enum Size { Small = 1, Medium, Large }
let mySize: Size =Size.Medium
console.log(mySize)
// var Size;
// (function (Size) {
//     Size[Size["Small"] = 1] = "Small";
//     Size[Size["Medium"] = 2] = "Medium";
//     Size[Size["Large"] = 3] = "Large";
// })(Size || (Size = {}));
// let mySize = Size.Medium;
// console.log(mySize);

// PascalCase
const enum Size1 { Small = 1, Medium, Large }
let mySize1: Size1 =Size1.Medium
console.log(mySize1)
// let mySize1 = 2;
// console.log(mySize1);


function calculateTax(income: number, taxYear = 2022): number {
    if(taxYear < 2022) 
     return income * 1.2
    return income * 1.3
}

calculateTax(10_000)

// custom types
type Employee = {
    readonly id: number,
    name: string, //optional: name?: string
    retire: (date: Date) => void
}

let employee: Employee = { 
    id: 1, 
    name: "hudir", 
    retire:(date: Date) =>{
    console.log(date)
} }
employee.name = "hu"

function kgToLbs(weight: number | string) :number {
    // Narrowing
    if( typeof weight === 'number') return weight * 2.2
    else return parseInt(weight) * 2.2
}

kgToLbs(10)
kgToLbs("10kg")

// let weight: number & string;
type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;

let textBox : UIWidget = {
    drag: ()=>{},
    resize: ()=>{}
}

// Literal (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 100

type Metric = 'cm' | 'inch';


function greet(name: string | null | undefined) {
    if(name)
    console.log(name.toUpperCase())
    else 
      console.log("Hola!")
}

greet(null)

type Customer = {
    birthday?: Date
}

function getCustomer(id: number) : Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(1);

// if (customer !== null && customer !== undefined)
// optional property access operator => if the object has this property
console.log(customer?.birthday?.getFullYear())

// optional element access operator => if there is an element 
// customers?.[0]

// optional call => if it is a function
// let log: any = (message: string) => console.log(message)
let log: any = null;
log?.('a')