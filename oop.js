// function Person(name, age){
//     this.name = name;
//     this.age =age
// }
// Person.prototype.eat = function(){
//     console.log(`${this.name} is eating`);
// }

// let person1 = new Person('Andryan', 16)
// console.A(person1)

// syntax OOP js
// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//         this._weight = 2;
//     }
//     get weight(){
//         return this._weight;
//     }

//     set weight(updateWeight){
//         this._weight = updateWeight;
//     }

// }
// let mycat = new Animal('Mochi', 2);
// mycat.weight = 3;
// console.log(`berat badan ${mycat.name} ${mycat.weight} kg`)



// try{
// class Animal {
//     #tail = 1;
//     constructor(name, age, weight){
//         this.name = name;
//         this.age = age;
//         this.weight =weight;
//         this.#tail = this.#defaultTail();   
        
//     };

//     set tail(UpdateTail){
//         console.log('Maaf anda tidak bisa mengubah jumlah ekor');
//     }
//     get tail(){
//         return this.#tail;
//     }

//     #defaultTail(){
//         return 1;
//     }
// }
// let myCat = new Animal('Mochi', 2, 3)
// // myCat.tail = 2;
// console.log(myCat.tail)
// }catch(e){

//     console.log('Sorry ' + e)
// }


// class Vegetable{
//     constructor(name){
//         this.name = this.name;
//     }
// }
// const carrot = new Vegetable('carrot');
// console.log(carrot.name); // Should display 'carrot'



// class Book{
//     constructor(author){
//         this._author = author;
//     }
//     get author(){
//         return this._author;
//     }

//     set author(updateAutor){
//         this._author = updateAutor;
//     }

    
// }

// const novel = new Book('anonymous');
// console.log(novel.writer);
// novel.writer = 'newAuthor';
// console.log(novel.writer);


// class Thermostat{
//     consturctor(fahrenherit){
//         this._fahrenherit = fahrenherit
//     }

//     get tempereture(){
//         return 5/9 * (this._fahrenherit-32);
//     }
//     set temperature(temperature){
//         this._fahrenherit = temperature * 9.0 / 5 +32
//     }
// }


// const thermos = new Thermostat(76); // Setting in Fahrenheit scale
// let temp = thermos.temperature; // 24.44 in Celsius
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 in Celsius




