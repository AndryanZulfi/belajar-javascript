function truthCheck(collection, pre) {
    let keys = Object.keys(pre)
    return collection.every(item => Boolean(item[pre]))
  }
  
  console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"))