function translatePigLatin(str) {
    if(str[0].match(/[^aiueo]/i)){
        if(str.match(/[aiueo]/i)){
            return str.replace(/([^aiueo]+)(\w+)/, "$2$1ay")
        }else{
            return str + 'ay'
        }
    }else{
        return str + 'way'
    }


  }
  
  console.log(translatePigLatin("rhythm"))