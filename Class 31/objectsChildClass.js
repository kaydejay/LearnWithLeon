//Create an a class and extend it - Can be anything you would like it to be! 

class Animal{
    constructor(name){
        this.name = name
}
speak(){
    console.log(`${this._name} makes a sound`)
}
}

class Dog extends Animal {
    constructor(name,breed) {
        super(name)
        this.breed = breed
    }
}

class Cat extends Animal {
    constructor(name, color){
        super(name)
        this.color = color
    }
    speak(){
        console.log('MEOW')
    }
}

let greyworm = new Cat ('greyworm', 'grey')
let simba = new Dog ('simba', 'Sheperd')

