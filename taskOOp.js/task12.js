// let isCuteMixin = function(obj) {
//     obj.isCute = function() {
//       return true;
//     };
//   };
//   let singMixin = function(obj) {
//     obj.sing = function() {
//       console.log("Singing to an awesome tune");
//     };
//   };

let funModule = (()=>{
    return{
        isCuteMixin: (obj)=>{
            obj.isCute =()=>{
                return true
            }
        },
        singMixin: (obj)=>{
            obj.sing = ()=>{
                console.log('Singing to an awesome tune')
            }
        }
    }
})()


let person = {
    name: 'Andryan',
    age: 17
}

funModule.isCuteMixin(person)
funModule.singMixin(person)
person.sing()
person.isCute()