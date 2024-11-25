//Arrays

//Create an array of numbers. Sum all of the numbers. Alert the sum.

let numArr = [1, 2, 3, 4, 5]
let sum = 0;
for (let i=0; i < numArr.length; i++){
        sum += numArr[i]
    }

alert(sum)

//////////////////////

let nums = [42, 19, 77, 33, 57]
let sum = nums.reduce( (acc, c) => acc + Number(c), 0 )
alert(sum)

//////////

let numArr = [1, 2, 3, 4, 5]
let sum = 0;
numArr.forEach((x) => sum += x);
alert(sum)
