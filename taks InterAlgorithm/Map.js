function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
        // mencari radius radiusEarth + avgAlt;
        // rumus period Math.round(2 * Math.PI * Math.sqrt(Math.pow(radius, 3) / GM));
    return arr.map(el => {
        const avgAlt = el.avgAlt
        const radius = earthRadius + avgAlt;
        const period =  Math.round(2 * Math.PI * Math.sqrt(Math.pow(radius, 3) / GM))
        return {name: el.name, orbitalPeriod: period}
    })
        
  }
  
 console.log(
    orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]))