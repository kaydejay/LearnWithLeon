//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function MakeCharacter (hairColor, nosePiercing, skateboardBrand, skateStyle){

this.characterHairColor = hairColor
this.characterNosePiercing = nosePiercing
this.characterSkateboardBrand = skateboardBrand
this.characterSkateStyle = skateStyle

this.trickOne = function () {
    console.log ('kickflip')
}
this.trickTwo = function () {
    console.log ('ollie')
}
this.trickThree = function () {
    console.log ('grind')
}
}


function TonyHawkCharacter(chName, chStance, chSponsor, chMove){
    this.characterName = chName 
    this.stance = chStance
    this.sponsor = chSponsor
    this.specialMove = chMove
    this.flip = function(){
        console.log('kickflip')
    }
    this.taunt = function(){
        console.log(`Don't make me use my ${this.specialMove}`)
    }
    this.grab = function(){
        console.log('MELON GRABBB')
    }
}

let kareemCampbell = new TonyHawkCharacter('Kareem', 'Goofy', 'Element', 'Ghetto Bird')
