//Write your pseduo code first! 
//c to f

//obtain value - temperature in celcius
//perform equation to change celcius to fahrenheit
//return fahrenheit value

document.querySelector('h1').addEventListener('click', cToF)

function cToF(){
    //obtain value - temperature in celcius
    let temp = Number(document.querySelector('input').value)

    //perform equation to change celcius to fahrenheit
    temp = temp * 1.8 + 32

    //return fahrenheit value
    document.querySelector('h2').innerText = temp
}
