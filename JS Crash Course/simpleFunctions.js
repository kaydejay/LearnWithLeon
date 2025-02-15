//---Easy
//create a function that subtracts two numbers and alerts the difference

function subTwoNums (n1,n2){
    alert(n1-n2)
    //let difference = n1 - n2
    //alert(difference)
}

//create a function that divides three numbers and console logs the quotient

function divideThreeNums(n1,n2,n3){
    console.log((n1/n2) / n3)
}

//create a function that multiplys three numbers and returns the product

function multiplyThreeNums(n1,n2,n3){
    return (n1 * n2 * n3)
    //let product = n1*n2*n3
    //return product
}

multiplyThreeNums(2,3,5)

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of 
//dividing the sum of the first two numbers by the third number

function takeThreeNums (n1,n2,n3){
    let sum = n1 + n2
    return sum / n3
}

//const takeThreeNums = (a,b,c) => (a+b)%c

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater 
//than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, 
//subtract the difference of the last two numbers and console log the value. If the product is 100, multiply 
//the first three numbers together and alert the remainder of dividing the fourth number


function takeFourNums (n1,n2,n3,n4){
    let product = n1 * n2
    if (product > 100){
        console.log(n3 + n4)
    }else if (product <100){
        console.log(n3 - n4)
    }else{
        alert((n1 * n2 * n3) % n4 )
    }
}
