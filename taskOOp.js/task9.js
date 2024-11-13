let walkMixin = function (obj) {
    obj.walk = () =>{
        console.log(`${obj.name} is walking`)
    }
}

let robot = {
    name: 'exe',
    numLegs: 2
}
let tiger = {
    name: 'mawww',
    numLegs: 4
}
walkMixin(robot);
walkMixin(tiger)
robot.walk()
tiger.walk()