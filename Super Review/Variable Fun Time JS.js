//--- Easy
//create a variable and assign it a number

let numVar = 9;

//minus 10 from that number

numVar = numVar - 9;

//print that number to the console

console.log(numVar);

//--- Medium
//create a variable that holds a value from the input

let inputVar = Number(document.getElementById(danceDanceRevolution).value);

/* let inputVar = document.querySelector('input').value */

//add 25 to that number

inputVar += 25;

//alert that number

alert (inputVar);

//--- Hard
//create a variable that holds the h1

const h1Var = document.querySelector('h1');

//add an event listener to that element that console logs the sum of the two previous variables

h1Var.addEventListener('click', addTwoNums)

function addTwoNums() {
    console.log(numVar + inputVar)
}
