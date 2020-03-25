console.log('Hello World');

//alert('Welcome Harika');

//variables
var b = 'smoothie';
console.log(b);

var someNumber = 24;
console.log(someNumber);

document.getElementById('someText').innerHTML = 'Hey There';

//Manipulate DOM with Javascript
/*Its just a fancy way of saying change HTML with Javascript */

//var age = prompt('What is your age?');

//document.getElementById('someText').innerHTML = age;

//Numbers in javascript

var num1 = 56;

//num1 = num1 + 1
//Increment num1 by 1
num1++;
console.log(num1);

//Decrement num1 by 1
num1--;
console.log(num1);

// Divide, multiply *, remainder %
console.log(num1 % 6);

//Increment/decrement by any number i want
num1 += 10;
console.log(num1);

/*Functions
    1. create a function
    2. call a function
*/

//create
function fun() {
    console.log('this is a function');
}

//call
fun();

/* create a function that take in name and says hello 
followed by your name

For example
Name : Harika
Return : "Hello Harika"
*/

function greeting(name){
   var result = 'Hello' + ' ' + name; //string concatenation
   console.log(result);
}

//var name =  prompt('What is your name');
//greeting(name);

//How do arguments work in functions?
//How do we add two numbers together in a function?

function sumNumbers(num1, num2){
    var result = num1 + num2;
    console.log(result);
}

sumNumbers(10,20);

/* While loops

var num = 0;

while (num < 10) {
    num += 1;
    console.log(num);
}

*/

//For loop
for(let num = 0; num <= 10; num++){  
    console.log(num);
}



