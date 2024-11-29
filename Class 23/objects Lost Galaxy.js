//Create a dog object that has four properties and three methods

let dog = {}

dog.color = 'black'
dog.breed = 'corgi'
dog.collarColor = 'lime green'
dog.barkVolumeLevel = 'loud'
dog.legs = 4

dog.makeNoise = function (){
    alert('Bark!')
}
dog.wantPets = function(){
    console.log('Boop nose')
}
dog.isHungry = function(){
    console.log('Goes to food bowl')
}
