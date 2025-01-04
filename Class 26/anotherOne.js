document.querySelector('button').addEventListener('click', getDrink)
document.getElementsByClassName('nxtBtn')[0].addEventListener('click', nextDrink)

var package;
var counter = 0; 

function getDrink (){

    let drink = document.querySelector('input').value
    
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drink}`)
    .then(res => res.json()) //parse response as JSON
    .then(data => {
        package = data;
        console.log(data)
        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function nextDrink() {
    counter++;
    document.querySelector('h2').innerText = package.drinks[counter].strDrink
    document.querySelector('img').src = package.drinks[counter].strDrinkThumb
}
