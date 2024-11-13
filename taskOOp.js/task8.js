function Animal(){}
Animal.prototype.eat = () =>{
    return 'nyum nyum nyum'
}
function Bird(){}

Bird.prototype = Object.create(Animal.prototype)
Bird.prototype.eat = () => {
    return 'peck peck peck'
}
const duck = new Bird('ZLF')
console.log(duck.eat())