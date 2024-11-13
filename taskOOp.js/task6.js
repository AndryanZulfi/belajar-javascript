function Bird(name) {
    this.name = name;
  }
  
  let duck = new Bird("Donald");

console.log(Bird.prototype.isPrototypeOf(duck))