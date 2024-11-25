// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

let sentence = 'Am I a muppet?'
const mySentence = sentence.split('');
for(let i = 0; i < mySentence.length; i++){
    if (mySentence[i] === '?'){
        alert(sentence)
    }
}

sentence

/*
const str = 'Is this the best week ever?'
alert( str.endsWith('?) )
*/

let str = 'some more examples apple'
console.log (str.includes('apple'))


//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

let anotherSentence = 'I am a jr. dev'
console.log(anotherSentence.replaceAll('jr. dev', 'software engineer'))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors(){
    let num = Math.random()
    if (num <0.33){
        return 'rock'
    }if (num < 0.66){
        return 'paper'
    }else{
        return 'scissors'
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot 
//using the above function

function checkWin(playerChoice){
    let botChoice = rockPaperScissors()
    if ( (playerChoice === 'rock' && botChoice === 'scissors') || 
    (playerChoice === 'scissors' && botChoice === 'paper') || 
    (playerChoice === 'paper' && botChoice === 'rock')){
        console.log('You Win!')
    }else if (playerChoice === botChoice){
        console.log('You Tied!')
    }else{
        console.log('You Lost!')
    }
}

//checkWin('paper')

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of 
//each game to the console.

function playGameXTimes(arr){
    arr.forEach( choice => checkWin(choice) )
}

(playGameXTimes(['rock', 'paper', 'scissors']))

