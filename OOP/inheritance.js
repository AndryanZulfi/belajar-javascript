class Animal{
    constructor(name, age, weigth, tail){
        this.name = name;
        this.age = age;
        this.weigth = weigth;
        this.tail = tail;
    }

    eat(){
        console.log(`${this.name} is eating`);
    }

}

class Cat extends Animal{
    walk(){
        console.log(`${this.name} is walking`)
    }
}
class Fish extends Animal{
    swim(){
        console.log(`${this.name} is swimming`)
    }
}

const mycat = new Cat('Mochi', 2, 1, 1);
console.log(mycat)
