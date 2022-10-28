console.log('Hello World')

//Primitive or value types

let name='satya';
let age= 30;
let isApproved=true;
let firstName=undefined;
let selectColor=null;

//reference types and it examples
//1.object
//2.array
//3.functions

//object

let person={

    name:'Narayana',
    age:30
}
console.log(person);

//Dot notation
person.name="Satyanarayana"

console.log(person.name);

//Bracket notation

person['age']=29;
console.log(person['age'])
//after changing the key pair values by its notations methods
console.log(person);

//array

let selectedColor=['red','blue']
console.log(selectedColor)

//calling particular index
console.log(selectedColor[1])

//expanding the array size
selectedColor[2]='green'
console.log(selectedColor)

//Functions

function greet(name,lastName) {
 
console.log('Hello Mr' + ' '  + name + ' ' + lastName);

}
greet('satya','Bhavani');
greet('Narayana','Karadhi');

function Square(number){
return number*number
}

let number=Square(2);
console.log(number)
console.log(Square(6))
