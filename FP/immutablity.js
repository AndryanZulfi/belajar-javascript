const Person = {
    name: 'Andryan',
    age: 17,
}

const changeNewUser = (age, newValue) => {
    age = newValue;
    return {...Person, age}
}

const newUser = changeNewUser(Person, 12)
console.log(newUser)
console.log(Person)