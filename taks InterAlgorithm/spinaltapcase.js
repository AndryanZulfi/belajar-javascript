function spinalCase(str) {
    return str.split(/(?=[A-Z])|[\s-]+/)
  }
  
  console.log(spinalCase("Teletubbies sayEh-oh"))


