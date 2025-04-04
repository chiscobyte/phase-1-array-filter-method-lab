function findMatching(drivers, name){
    const matching = drivers.filter(item => item.toUpperCase() === name.toUpperCase())
    return matching;
}


function fuzzyMatch(drivers,letter){
const count = letter.length;
const matchStart =  drivers.filter(item => item.substring(0,count) === letter);
console.log(matchStart)
return matchStart;
}


function matchName(driver, test){
const nameSimilar = driver.filter(item => item.name === test);
return nameSimilar;
}