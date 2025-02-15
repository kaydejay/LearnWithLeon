//--- Easy
//create a variable and assign it a number

let newVar = 1

//minus 10 from that number

newVar = newVar - 10
//newVar -= 10

//print that number to the console

console.log(newVar)

//--- Medium
//create a variable that holds a value from the input

//let newValue = Number(document.querySelector('#danceDanceRevolution').value)

//add 25 to that number

//newValue = newValue + 25
//newValue += 25

//alert that number

//alert(newValue)

//--- Hard
//create a variable that holds the h1

const h1 = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables

h1.addEventListener('click', addSum)

function addSum (){
    let newValue = Number(document.querySelector('#danceDanceRevolution').value)
    newValue = newValue + 25
    console.log(newVar + newValue)
}
