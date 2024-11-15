function convertHTML(str) {
    const htmlEntities = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;'
      };
    
    //   return str.replace(/[&<>"']/g, match => htmlEntities[match]);
    return match => htmlEntities[match]
  }
  
  console.log(convertHTML("Dolce & Gabbana"));