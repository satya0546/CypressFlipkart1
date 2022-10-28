//Arthamatic operators

let x = 12;
let y = 5;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

//postIncrement (++)
console.log(x++);
console.log(x);

//postdecrement(--)
console.log(x--);
console.log(x);

//Assignment Operators

x=x + 5;
console.log(x)
x +=5;
console.log(x)

//compression operator
let z = 3;

//retional operator
console.log(z > 0);
console.log(z >= 2);
console.log(z < 3);
console.log(z <= 3);

//equality operator
console.log(z===1);
console.log(z!==1);

//Strict equality operator(Type + value) must be same
console.log(1===1);
console.log('1'===1);

//lose equality (value)

console.log(1==1);
console.log('1'==1);
console.log(true==1);

//ternary operatote or conditional

//if customer has more than 100 points ,
//they are a 'gold' customer otherwise,
//they are a 'sliver' customer

//let points = 110;
let points = 90;
let type = points > 100 ? 'gold' : 'sliver'
console.log(type)


//logical operators

//Logical And(&&) returns true if both operands are true
let HighIncome = true
let goodCreditScore = true
let EligiableforLoan = HighIncome && goodCreditScore;
console.log('Eligable',EligiableforLoan);
//Logical Or(||) returns true if any one of the operands is true

let HighIncome1 = false
//let goodCreditScore1 = true
let goodCreditScore1 = false
let EligiableforLoan1 = HighIncome1 || goodCreditScore1;

console.log('Eligable',EligiableforLoan1);

//Not (!)
let ApplicationRefused = !EligiableforLoan1;
console.log('Application Refused',ApplicationRefused)



//Logical opetors with non booleans

//Falsy (false)
//undefined
//null
//''
//0
//false
//NaN

//let usercolor = 'red';
let usercolor = undefined;
let defaultcolor = 'red';
let currentcolor = usercolor || defaultcolor
console.log(currentcolor);


//Bitwise oparator
//read,write,execution
//00000100
//00000010
//00000001

const readPermission = 4;
const writePermission = 2;
const excutePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission

console.log(myPermission)

let message = 
          (myPermission & readPermission) ? 'yes' : 'no';
          console.log(message)

          
//Operator precesendce

let a = 3 + 4 * 5;
console.log(a)

let b = (3 + 4) * 5;
console.log(b)

//swaping of two numbers

let d = 'red';
let e = 'blue';

let f = d;
d = e;
e = f


console.log(d)
console.log(e)
