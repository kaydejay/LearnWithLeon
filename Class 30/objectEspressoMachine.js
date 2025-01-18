//Create an espresso machine class that makes machines with 4 properties and 3 methods

class EspressoMachine{
    constructor(color, brand, material, price){
        this.color = color
        this.brand = brand,
        this.material = material
        this.price = price
    }
    turnOn(){
        alert('Espresso machine is turned on')
    }
    turnOff(){
        alert('Espresso machine is turned off')
    }
    brew(){
        alert('Espresso machine is brewing')
    }
}

let fancyShmancy = new EspressoMachine('rose gold', 'Mr. Coffee', 'brass', 'too much')
