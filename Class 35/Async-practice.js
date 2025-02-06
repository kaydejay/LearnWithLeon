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
