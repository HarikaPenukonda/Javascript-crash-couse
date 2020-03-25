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

// Data types
 let yourAge = 18;                              //number
 let yourName = 'Harika';                       //string
 let name = {first: 'Jane', last: 'Doe'};       //object
 let truth = false;                             //boolean
 let groceries = ['apple', 'banana', 'orange']; // array
 let random;                                    //undefined
 let nothing = null;                            //value null

 //Strings in Javascript (common methods)

 let fruit = 'banana';
 let moreFruits = 'banana\napple';

 console.log(fruit.length);
 console.log(fruit.indexOf('nan'));
 console.log(fruit.slice(2,6));
 console.log(fruit.replace('ban', '123'));
 console.log(fruit.toLowerCase());
 console.log(fruit.toUpperCase());
 console.log(fruit.charAt(2));
 console.log(fruit[2]);
 console.log(fruit.split(',')); //split by a comma
 console.log(fruit.split('')); //split by characters

 // Arrays in javascript
 let fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];
 fruits = new Array ('apple', 'banana', 'orange', 'mango', 'kiwi');

 console.log(fruits[0]); //access value of index 0

 fruits[0] = 'peach';
 console.log(fruits); 

 for(let i=0; i < fruits.length; i++ ){
     console.log(fruits[i]);
 }

 //array common methods
 console.log('to string', fruits.toString());
 console.log(fruits.join('/'));
 console.log(fruits.pop(), fruits); //removes last item
 console.log(fruits.push('blackberry'), fruits); //appends
 console.log(fruits[4]);
 fruits[4] = 'new fruit'; //same as push
 console.log(fruits);
 fruits.shift(); // remove the first element from an array
 console.log(fruits);
 fruits.unshift('kiwi'); //add first element to an array
 console.log(fruits);

 let veggies = ['Tomato', 'onion', 'brinjal', 'potato'];
 let allGroceries = fruits.concat(veggies);
 console.log(allGroceries);
 console.log(allGroceries.slice(1,4));
 console.log(allGroceries.reverse());
 console.log(allGroceries.sort());

 let someNumbers = [2,3,4,5,3,2,5,3,4,23,2,4,5,45,322];
 console.log(someNumbers.sort(function(a, b) {return a-b})); //sorted in ascending order
 console.log(someNumbers.sort(function(a, b) {return b-a})); //sorted in descending order

 let emptyArray = new Array();
 for (let num = 0; num < 10; num++){
     emptyArray.push(num);
 }
console.log(emptyArray);