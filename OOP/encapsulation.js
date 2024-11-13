// dengan menggunakan undescore _
class Car{
    constructor(model, color){
        this.model =model;
        this.color = color;
        this._tire = 4;
    }
    
    set tire(tire){
        console.log('Maaf anda tidak dapat mengubah jumlah ban');
    }

    get tire(){
        return this._tire;
    }
    drive(){
        console.log(`${this.model} is driving`);
    }
}


const myCar = new Car('BMW', 'blue');
// myCar._tire = 2;
console.log(myCar)


// Menggunakan #
class Person{
    #eye = 2;
    constructor(name, age){
        this.name = name
        this.age = age
        this.#eye = this.#defaultEye();
    }

    set eyes(e){
        console.log('Maaf anda tidak bisa mengubah jumlah mata');
    }
    get eyes(){
        return this.#eye;
    }
    #defaultEye(){
        return 2;
    }
}
const person1 = new Person('Andryan', 18);
console.log(person1.eyes)