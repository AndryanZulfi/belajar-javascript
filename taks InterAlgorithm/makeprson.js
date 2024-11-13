const Person = function(first, last) {

    let firstName =first
    let lastName = last
    this.getFullName = function() {
      return firstName + ' ' + lastName;
    };
    this.getFirstName = () => {
        return firstName
    }
    this.getLastName = () => {
        return lastName
    }
    this.setFullName = (newFirst, newLast) => {
        firstName = newFirst
        lastName = newLast
    }
    this.setFirstName = (newFirst) => {
        firstName = newFirst
    }
    this.setLastName = (newLast) => {
        lastName = newLast
    }
  };
  
  const person1 = new Person('Andryan', 'Zulfi')
  console.log(person1.getFullName())
  person1.setFirstName('zlf')
  console.log(person1.getFirstName())