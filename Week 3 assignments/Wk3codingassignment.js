//Question 1: Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

var ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

//Question 1a: Programmatically subtract the value of the first element in the array from 
//the value in the last element of the array 

console.log (ages[ages.length - 1] - ages[0]);
// ages.length is the length the array
//93 - 3 = 90

//Question 1b: Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

ages.push(55); // .push method pushes a value to the end of the array
// var ages = [3, 9, 23, 64, 2, 8, 28, 93, 55]
console.log(ages[ages.length - 1] - ages[0]);
//55-3 = 52

//1c: Use a loop to iterate through the array and calculate the average age. 

var totalAge = 0;
for (var i = 0; i < ages.length - 1; i++){
    totalAge += ages[i];
}

var averageAge = totalAge / (ages.length-1) ;
console.log ([totalAge,i,averageAge], ages.length-1);

//Question 2: Create an array called names that contains the following values:
// ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);


//Question 2a: Use a loop to iterate through the array and calculate the average number of letters
// per name. 

for (let i = 0; i < names.length; i++){
    console.log([names[i].length/names.length]);
}

//Question 2b:Use a loop to iterate through the array again and 
//concatenate all the names together, separated by spaces. 

//var resultString = names

for (let i = 0; i < names.length; i++){
    console.log(names.join(" ")); //.join method 
}

console.log(names.join(" "));// would do the same as above

//Question 3: How do you access the last element of any array?


console.log(names[names.length - 1]);

// Question 4: How do you access the first element of any array?

console.log(names[0]);

//Question 5:Create a new array called nameLengths. Write a loop to iterate over
// the previously created names array and add the length of each name to the nameLengths array.
//For example: ----> namesArray = ["Kelly", "Sam", "Kate"] //given this array
//nameLengths = [5, 3, 4] //create this new array

//var results = names.map(names[i].length => i)


var nameLengths = []
for (let i = 0; i < names.length; i++){
    nameLengths.push(names[i].length);
    
} 
console.log(nameLengths);


//Quesetion 6: Write a loop to iterate over the nameLengths array and calculate the sum of 
// all the elements in the array. 

var sumofNameLengths = 0;
for (var i = 0; i < nameLengths.length; i++){
    sumofNameLengths += nameLengths[i];
}

console.log(sumofNameLengths)

//Question 7: Write a function that takes two parameters, word and n, as arguments and 
//returns the word concatenated to itself n number of times. 
//(i.e. if I pass in ‘Hello’ and 3, I would expect the function to return 
// ‘HelloHelloHello’).

function homework (word, n){
 return (word.repeat(n)); //when writing a function be sure to use return and not console.log within the curly brackets
}
console.log(homework("Hello", 3));

//Question 8: Write a function that takes two parameters, firstName and lastName, and 
//returns a full name.

function fullName (firstName, lastName){
    return firstName + " " + lastName
}

console.log(fullName("Fionna", "Williams")); //Be sure to enter a string for the inputs

//Question 9: Write a function that takes an array of numbers and returns true if the 
//sum of all the numbers in the array is greater than 100.


let numbers = [55, 105, 155, 205, 255, 305]

function compareSum(numbers){
    let sum = 0
for (let i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
    // initial: sum = 0 
  // iteration 1: 0 + 55 => sum = 55
  // iteration 2: 55 + 105 => sum = 160
  // iteration 3: 160 + 155 => sum = 315
  // iteration 4: 315 + 205 => sum = 520
  // iteration 5: 520 + 255 => sum = 775
  // interation 6: 775 + 305 => sum = 1080
}
//return sum //output is 105
return sum > 100

}
console.log (compareSum(numbers));



 // Output: 150



//Question 10: Write a function that takes an array of numbers and returns the average of 
// all the elements in the array.

var numbers2 = [10, 15, 20, 25, 30, 35] // make sure the above array is commented out so that the function below does not add them both together to get the sum of the array.

function getsAverage(numbers2){
    let sum = 0
for (let i = 0; i < numbers2.length; i += 1) {
  sum += numbers2[i];
}
return sum/numbers2.length // 135/6
    //numbers2.length is the number of integers in the array
}
console.log(getsAverage(numbers2));



//Question 11: Write a function that takes two arrays of numbers and returns true if the 
//average of the elements in the first array is greater than the average of the 
//elements in the second array.



function comparetwoArrays (numbers, numbers2){
    let sum1 = 0
    let sum2 = 0
    let average1 = 0
    let average2 = 0
    for (let i = 0; i < numbers.length && i < numbers2.length; i += 1){
        sum1 += numbers[i] ; // equals the sum of integers in numbers array
        sum2 += numbers2[i]; // equals the sum of integers in numbers2 array
        average1 = sum1/numbers.length; // 1080/6
        average2 = sum2/numbers2.length; // 135/6
    } return average1 > average2;
    
}
console.log(comparetwoArrays(numbers, numbers2));

//Question 12: Write a function called willBuyDrink that takes a boolean isHotOutside, 
//and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
let isHotOutside = false;
let moneyInPocket = 2;
function willBuyDrink(isHotOutside, moneyInPocket){
if (moneyInPocket > 10.50 && isHotOutside == true){
    return true
}else{
    return false
}
    
}
console.log(willBuyDrink(isHotOutside, moneyInPocket));

/*let numbers3 = [1, 2, 3, 4];
let sum = numbers3.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
});
*/

//Question 13: Create a function of your own that solves a problem. 
//In comments, write what the function does and why you created it.
// A function that gets the sum of all the arrays within an array and returns the sums in an array
// the reason why i created this function is because I was learning about nested arrays in class and how to access them
//so I wanted to bas

const nestedArray = [
    [1, 2, 3, 4, 5, 6], // = 21
    [2, 4, 6, 8, 10, 12], // = 42
    [3, 6, 9, 12, 15, 18], // = 63
    [4, 8, 12, 16, 20, 24], // = 84 
    [5, 10, 15, 20, 25, 30], // = 105
];

console.log(nestedArray[3]) // testing to make sure that I created the nested array correctly

function getsnestedArrayAverage() { 
 
    for(var index1=0;index1<nestedArray.length;index1+=1) // loops through the nested array to find the sum of each one
    {
    for(var index2=0;index2<6;index2++) // loops through the length of the single arrays
    {
        var sumofnestedArray = nestedArray.map(getsAverage) // uses that getsAverage function created on line 134 to get the average of each single array
    
    }return sumofnestedArray;
    }
    }
    console.log(getsnestedArrayAverage()); //calls the function and logs it to the console


