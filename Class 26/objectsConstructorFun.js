//Create a pizza constructor with 4 properties and 3 methods

function PizzaMachine (pizzaSize, pizzaCrust, pizzaSlices, pizzaTemperature) {
    this.size = pizzaSize
    this.crust = pizzaCrust
    this.slices = pizzaSlices
    this.temperature = pizzaTemperature

    this.delivertyTime = function (){
        console.log('Calculating...')
    }
    this.burnMouth = function (){
        console.log('aSDLKFJIOANLADSKJF')
    }
    this.frisbee= function (){
        console.log('YEEEeeet')
    }
}

let pizza = new PizzaMachine ('large', 'thin', 8, 'hot')
