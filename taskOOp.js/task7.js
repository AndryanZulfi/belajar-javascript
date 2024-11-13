function Dog(name){
    this.name = name;
}
Dog.prototype = {
    constructor: Dog
}
function Bird(name){
    this.name =name
}
Bird.prototype = {
    constructor: Bird
}

function Animal(){

}
Animal.prototype = {
    constructor: Animal,
    describe: () => {
        console.log("My name is " + this.name)
    }
}