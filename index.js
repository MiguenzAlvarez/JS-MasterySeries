//BASICS

/*VARIABLES:
let name  = 'Mosh'; console.log(name);
let firstName = 'Mosh';*/

/*CONSTANTS:
(const no se puede cambiar) let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);*/

/*PRIMITIVE TYPES:
let name = 'Mosh'; //String literal
let age = 30; //Number Literal
let isApproved = true; //Bollean Literal
let firstName = undefined;
let selectedColor = null; //clear variable*/

/*OBJECTS:
let person = {name: 'Mosh', age: 30}
Dot Notation: person.name = 'John';
Bracket Notation: let selection = 'name'; person[selection] = 'Mary';
console.log(person.name);*/

/*ARRAYS:
let selectedColor = ['red', 'blue'];
selectedColor[2] = 1;
console.log(selectedColor.length);*/

/*FUNTIONS:
Perfoming a task *type of function*
function greet(name, lastName) {console.log('Hello' + name + ' ' + lastName)}
greet('John', 'Smith');

Calcuating a value *type of function*
function square(number) {return number * number;}
console.log(square(2))
console.log('Hello World');*/
//
//
//OPERATORS

/*ARITHMETIC OPERATORS
let x = 10;
let y = 3;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);
Increment (++): console.log(x++); console.log(x);
Decrement(--): console.log(--x);*/

/*ASIGMENT OPERATORS: let x = 10; x += 5;*/

/*COMPARISON OPERATORS: let x = 1;
Relational
console.log(x > 0);
console.log(x >= 1);
console.log(x < 1);
console.log(x <= 1);*/

/*EQUALITY OPERATORS:
console.log(x === 1); Strict Equality (type & value)
console.log(x !== 1); Lose Equality (value)*/

/*TERNARY OPERATOR:
let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);*/

/*LOGICAL AND (&&) return true if both operands are TRUE
console.log(true && true);
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan);

LOGICAL OR (||) return TRUE if one of the operands is TRUE
console.log(true || true);

NOT (!)
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log("eligibleForLoan", eligibleForLoan);

//NOT (!) return the opposite value
let applicationRefused = !eligibleForLoan;
console.log("applicationRefused", applicationRefused); 

Falsy (false values: undefined, null, 0, false, '', NaN)
Anything that is not Falsy is Truthy*/
//
//
//CONTROL FLOW

/*IF/ELSE
let hour = 10;
if (hour >= 6 && hour < 12) {
  console.log("Good Morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good Afternoon");
} else console.log("Good Evening");*/

/*LOOPS
FOR
for (initialExpression, condition, incrementExpression){
    statement
}
for (let i = 1; i <= 5; i++) {
  console.log("Hello World", i);
}*/

/*WHILE
let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}*/

/*DO-WHILE executed at least once
let i = 0;
do {
  if (i % 2 !== 0) console.log(i);
  i++;
} while (i <= 5);*/

/*INFITE LOOPS
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

while (true){
}*/

/*FOR-IN
const person = {
  name: "Mosh",
  age: 30,
};
for (let key in person) console.log(key, person[key]);

const colors = ["red", "green", "blue"];
for (let index in colors) console.log(index, colors[index]);*/

/*FOR-OF (arrays and maps)
const colors = ["red", "green", "blue"];
for (let color of colors) console.log(color);*/

/*BREAK AND CONTINUE
let i = 0;
while (i <= 10) {
    *if (i === 5) break;
    *if (i % 2 === 0){
        i++;
        continue;
    }
    console.log(i);
    i++;
}*/
//
//
//EXERCISES

/*1- RETURN THE MAX OF TWO NUMBERS
let number = max(1, 2);
console.log(number);

function max(numberOne, numberTwo) {
  if (numberOne > numberTwo) return numberOne;
  return numberTwo;
}

//more easy
let number = max(1, 2);
console.log(number);
function max(numberOne, numberTwo) {
  return numberOne > numberTwo ? numberOne : numberTwo;
}*/

/*2- RETURN TRUE OR FALSE
console.log(800, 400);
function isLandScape(width, height) {
  return width > height;
}*/

/*3-
const output = fizzBuzz(3);
 console.log(output);

 function fizzBuzz(input) {
  if (typeof input !== 'number')
    return 'Not a number';

  if (input % 3 === 0 && input % 5 === 0)
    return 'FizzBuzz';
  if (input % 3 === 0)
    return 'Fizz';

  if (input % 5 === 0)
    return 'Buzz';

    return input;
}*/

/*4- 
const speeed = cheekSpeed(120);
console.log(speeed);

function cheekSpeed(speed) {
  if (speed > 180) return 'License Suspended';
  if (speed <= 70) return 'Ok';
  if (speed) if (speed > 70) return 'Point:' + ' ' + (speed / 5 - 14);
}*/

/*5- RETURN ODD OR EVEN
showNumbers(10);

function showNumbers(number) {
  for (let i = 0; i <= number; i++) {
    if (i % 2 === 0) console.log(i, "EVEN");
    else console.log(i, "ODD");
  }
}

//other way
showNumbers(10);

function showNumbers(number) {
  for (let i = 0; i <= number; i++) {
    const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
    console.log(i, message);
}
}*/

/*6- COUNT TRUTHY
const array = [0, null, undefined, "", 2, 3, 4];
console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}*/

/*7- STRING PROPERTIES
const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "b",
};

showProperties(movie);

function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      console.log(key, obj[key]);
    }
  }
}*/

/*8- SUM OF MULTIPLES OF 3 AND 5
console.log(sum(10));

function esMultiploDe(n1, n2) {
  return n1 % n2 === 0;
}

//suma desde 0 hasta 'limite' inclusive,
//los multiplos de 3 y 5
function sum(limit) {
  let totalSum = 0;

  for (let number = 0; number <= limit; number++) {
    if (esMultiploDe(number, 3) || esMultiploDe(number, 5)) {
      totalSum += number;
    }
  }

  return totalSum;
}*/

/*9-
const marks = [80, 80, 50]; //total divido cantidad
 //average = 70

 //1-59:f
 //60-69:d
 //70-79:c
 //80-89:b
 //90-100:a

console.log(calculateGrade(marks));

function calculateAverage(array){
  let sum = 0;
  for (let value of array)
  sum += value;
   return sum / array.length;
}

function calculateGrade(marks){
  const average = calculateAverage(marks);

  if (average < 60) return 'F';
  if (average < 70) return 'D';
  if (average < 80) return 'C';
  if (average < 90) return 'B';
  return 'A';
}*/

/*10-
showStars(5);

function showStars(rows){
  for (let row = 1; row <= rows; row++) {
    let pattern = '';
    for (let i = 0; i < row; i++){
      pattern += '*';
      console.log(pattern);
    }
  }
}*/

/*11-
showPrimes(20);

function showPrimes(limit){
  for (let number = 2; number <= limit; number++){
   if (isPrime(number)) console.log(number);
 }
}

function isPrime(number){
  for (let factor = 2; factor < number; factor++){
    if (number % factor === 0)
      return false;
  }

  return true;
}*/
//
//
//Camel Noation: oneTwoThree
//Pascal Notation: OneTwoThree
//
//
//OBJECTS

/*BASICS
const circle = {  //Object-oriented
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  }
};
circle.draw;      //Method*/

/*FACTORY FUNCTIONS:
function createCircle(radius) {
  return {
    radius, // <- = radius: radius,
    draw() { // <- = draw: function ()
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1);
console.log(circle1);
const circle2 = createCircle(2);
console.log(circle2);*/

/*CONSTRUCTOR FUNCTION
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const circle = new Circle(1);*/

/*DYNAMIC NATURE OF OBJECTS
const circle = {
  radius: 1,
};

circle.color = "yellow"; //add properties
circle.draw = function () {};

delete circle.color; //delete properties
delete circle.draw;

console.log(circle);*/

//5
//6

//VALUES TYPES: number, string, boolean, symbol, undefined, null
//REFERENCE TYPES: object, function, array
//Functions are objects too

/*PRIMITIVES are copied by their VALUE
let x = 10;
let y = x;

x = 20; (console: x = 20, y = 10)
/
/
let number = 10;
function increase(number){
  number++;
}
increase(number);
console.log(number); (console: number = 10)*/

/*OBJECTS are copied by their REFERENCE
let x = { value: 10};
let y = x;

x.value = 20; (console: x = 20, y = 20)
/
let obj = { value: 10);
function increase(obj) {
  obj.value++;
}
increase(obj);
console.log(obj); (console: obj) = 11;*/

/*ENUMERATING PROPERTIES OF AN OBJECT
const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};
//1 FOR_IN (bracket notation to get de the value of the key/propertie)
for (let key in circle)
console.log(key, circle[key]);
//2 FOR_OF (object is not iterable but we have the Object method so we can get all the keys in our 'circle object' and return an array)
for (let key of Object.keys(circle))
console.log(key);
//3 FOR _OF ( entries return each value pair as an array)
for (let entry of Object.entries(circle))
console.log(entry);
//4 FOR_IN (you can see if a given property exists in a given object)
if ('radius' in circle) console.log('yes');*/

/*CLONING AN OBJECT
const circle = { 
  radius: 1,
  draw() {
    console.log('draw');
  }
};

//1-
const another = {};
for (let key in circle)
another[key] = circle[key];
//2- more easy (and you can add values in {})
const another = Object.assign({}, circle);
//3- even more easy
const another = {...circle};
console.log(another);*/

/*MATH JAVASCRIPT: 
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math*/

/*STRING OBJECT: ('',"")
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String 
//String primitive
const message = 'hi';
//String Object
const another = new String('hi');*/

/*TEMPLATE LITERALS (``)
const another = //easier (we can add values with ${})
`This is my
'first' message`;
//vs primitive
const message = //complicated
'This is my\n +
'\'first\' message';*/

/*DATE:
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date
const now = new Date(); //time in the moment
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2018, 4, 11, 9);

now.setFullYear(2017);*/
