//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

const arrOne = [1, 2, 3, 4, 5];
let sum = 0;
for(let i = 0; i < arrOne.length; i++){
    sum += arrOne[i];
    }
alert(sum)

//OR:
let nums = [10,20,30,50]
alert( nums.reduce( (acc, c) => acc + c, 0))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

const arrTwo = [2, 3, 4, 5, 6]

let arrThree = arrTwo.map(number => number * number);

console.log(arrThree)


//OR: 
let newArr = arrOne => arrOne.map (num => num**2)

//Create a function that takes string
//Print the reverse of that string to the console

let myStr = 'these are words'

function takesStr (str){
    return str.split(' ').reverse().join(' ');
}

let reversedMyStr = takesStr(myStr);
console.log(reversedMyStr);


//or:

let unoReverse = myStr => console.log( myStr.split('').reverse().join(''))

//Create a function that takes in a string
//Alert if the string is a palindrome or not

const palindromeCheck = str => str === alert (str.split('').reverse().join('') )

palindromeCheck('racecar')
