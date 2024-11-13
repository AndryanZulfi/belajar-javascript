function Dog(name){
    Dog.prototype.numLegs = 4;
}

const myDog = new Dog('zlf')
const yourDog = new Dog('hehe')

console.log(myDog)