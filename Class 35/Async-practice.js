//Code 02
function houseOne(){
    console.log('Paper delivered to house 1')
}
function houseTwo(){
    setTimeout(() =>console.log('Paper delivered to house 2'), 3000)
}
function houseThree(){
    console.log('Paper delivered to house 3')
}

houseOne()
houseTwo()
houseThree()

//Code 03
function houseOne(){
    console.log('Paper delivered to house 1')
}
function houseTwo(){
    setTimeout(() =>console.log('Paper delivered to house 2'), 0)
}
function houseThree(){
    console.log('Paper delivered to house 3')
}

houseOne()
houseTwo()
houseThree()


//Code 06
const promise = new Promise((resolve, reject) => {
    const error = false
    if(!error){
        resolve('Promise has been fulfilled')
    }else{
        reject('Error: Operation has failed')
    }
})
//console.log(promise)
promise
    .then(data => console.log(data))
    .catch(err => console.log(err))


//Code 07
function houseOne(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Paper delivered to house 1')
        }, 1000)
    })
}
function houseTwo(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Paper delivered to house 2')
        }, 5000)
    })
}
function houseThree(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Paper delivered to house 3')
        }, 2000)
    })
}
houseOne()
    .then(data => console.log(data))
    .then(houseTwo)
    .then(data => console.log(data))
    .then(houseThree)
    .then(data => console.log(data))
    .catch(err => console.log(err))


//Code 04
function houseOne(){
    console.log('Paper delivered to house 1')
}
function houseTwo(callback){
    setTimeout(() => {
        console.log('Paper delivered to house 2')
        callback()   //this becomes HouseThree
        },3000)   
}

function houseThree(){
    console.log('Paper delivered to house 3')
}

houseOne()
houseTwo(houseThree)
//houseTwo higher order function, houseThree callback


//Code 05
function houseOne(){
    setTimeout(() => {
        console.log('Paper delivered to house 1')
    setTimeout(() => {
        console.log('Paper delivered to house 2')
        setTimeout(() => {
            console.log('Paper delivered to house 3')
        }, 3000)
    }, 4000)
    }, 5000)
}

houseOne()


//Code 07
function houseOne(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Paper delivered to house 1')
        }, 1000)
    })
}
function houseTwo(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Paper delivered to house 2')
        }, 5000)
    })
}
function houseThree(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Paper delivered to house 3')
        }, 2000)
    })
}

async function getPaid(){
    const houseOneWait = await houseOne()
    const houseTwoWait = await houseTwo()
    const houseThreeWait = await houseThree()
    console.log(houseOneWait)
    console.log(houseTwoWait)
    console.log(houseThreeWait)
}
getPaid()
