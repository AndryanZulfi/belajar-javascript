function Bird(){
    let countLegs = 2;

    this.getCountLegs = () => {
        console.log(countLegs)
    }
}

let duck = new Bird()
duck.getCountLegs()

