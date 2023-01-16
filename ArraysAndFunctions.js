

let array1 = [1, 5, 6, 9, 10, 14];

// print the 3rd element in array1

console.log(array1[2]);

// print the last element in array1
console.log(array1[5]);

// add 16 and 3 to array1

array1.push(16);
array1.push(3);

console.log(array1);

// sort the array, then print the 3rd element again
// did it change? - yes
//sort command -- array1.sort();

//array1.sort(function(a, b){return a - b}); - how to sort an array with numbers

/*for (let i = array1.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let k = array1[i];
    array1[i] = array1[j];
    array1[j] = k;
  }*/

  
array1.sort(function(a, b){return a - b});

console.log(array1);
console.log(array1[2]);

// create a variable called myTodoList that holds an empty array
let myTodoList = []
console.log(myTodoList);

// add three todo items to the array using a built-in array method

myTodoList.unshift("shower", "grocery shop", "dishes");


console.log(myTodoList);

console.log("--------------------------");

// remove the second item in the array
delete myTodoList[1];
// the code below removes the empty space from an array
myTodoList = myTodoList.filter(s => s.replace(/\s+/g, '').length !== 0);

/*myTodoList = myTodoList.filter(function(e) {
    return String(e).trim();
});*/
//var nonEmptyTodoList = myTodoList.filter(e => String(e).trim());

console.log(myTodoList);

console.log("--------------------------------");

// create another array, yourTodoList, and add two todo items
let yourTodoList = []
yourTodoList.unshift("sweep","mop");
console.log(yourTodoList);



// create another array, ourTodoList
const ourTodoList = [myTodoList + "," + yourTodoList];

// combine myTodoList and yourTodoList into ourTodoList

console.log(ourTodoList);

// sort the following array from Z-A?????

ourTodoList.sort((a,b) => b.localeCompare(a));

console.log(ourTodoList);

//ourTodoList = ourTodoList.sort((a, b) => b - a); 
//Another way to sort from a-z
/* ----->
function gradList(graduates){
    //write your code here
    graduates.push("Mary", "Steven", "Eddie");
    graduates.sort();
    let reverseGrads = graduates.reverse();
    return reverseGrads;
} -------->
*/


// create a function called reverse that takes in parameter
// this function will return the opposite of whatever is passed in
// if its a boolean, return the opposite
// if its a number, or a string, return the reverse (i.e. 1234 becomes 4321, Name becomes emaN)
// if its an array, return the reversed array with each element reversed


// create a function called addingMachine that will add all passed numbers and return the total
// Note: you don't know how many numbers will be passed



// You just signed a contract as an estimator for a restoration company. 
// Your contract states that you take home 10% of the profits on the first $100,000
// 20% on the next $400,000
// 35% on the next $500,000
// 40% on all profits above $1,000,000
// create a function that will allow you to check how much of a bonus you make
// the function should take in two variables as arguments, grossInvoiced and profitMargin

//Notes from openclass
//Problem 1: Function findCircumference: Create a function named findCircumference that returns 
//the circumference of a circle if given the radius.
/*

var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var a = parseInt(input[0]);




//write your code below

function findCircumference(a){
 
   let cir = 2* Math.PI *a;
    return cir;
 
} 

*/
//do not change below, used for testing purposes
console.log(findCircumference(a));

//Function with a loop of numbers and returnd value of "true" at the end.
function loopUntilX(x) {
    for (let i=0; i<x; i++) {
   console.log(i);
      }return true;
}

// how to creat a function Function isBlue: Create a function named isBlue. isBlue will take one parameter, 
//and it will return true if it is passed "blue", otherwise it will return false.
/*
function isBlue(var1){
    return var1.toLowerCase() === "blue";
}
*/

//The code below is a function to join two arrays "arrayName.concat(arrayBeingadded)"

/* ----->
function joinArrays(staticArray, input){
    return (staticArray.concat(input));
}

//another way to join two arrays

function joinArrays(array1, array2){
    let newArray = array1.concat(array2);
    return newArray;
} ----->
*/

// how to replace a value in an array
attendanceList[0] = "Steven";