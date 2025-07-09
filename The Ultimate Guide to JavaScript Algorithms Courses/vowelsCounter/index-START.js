/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

const Vowels = ['a', 'e', 'i', 'o', 'u']

function vowelsCounter(text) {
    let countStr = ''
    for (let i = 0; i < text.length; i++){
        if (text[i].toLowerCase() === 'a' || 'e' || 'i' || 'o' || 'u'){
            countStr += text[i]
        }
    }
    return countStr.length
}

function vowelsCounter(text){
    let counter = 0;
    for (let letter of text.toLowerCase()){
        if (Vowels.includes(letter)){
            counter++
        }
    }
    return counter
}

module.exports = vowelsCounter;
