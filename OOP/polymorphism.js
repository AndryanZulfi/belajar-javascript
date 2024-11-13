// overriding 

class Animal{
    constructor(name, age, weight){
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
    
    walk(){
        console.log(`${this.name} is walking`)
    }
}

class Cat extends Animal{
    constructor(name, age, weight, tail){
        super(name, age, weight); //Overriding constructor
        this.tail =tail;
    }
    walk(){
        super.walk();//opsional jika ingin mencetak  method sebelumnya
        console.log(`${this.name} is walking fast`)//overriding method
    }

}

const myCat = new Cat('Mochi', 2,3, 1)
console.log(myCat)
myCat.walk()