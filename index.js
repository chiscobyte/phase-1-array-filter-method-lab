// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(collection, name){
    const matchingNames = []
    for(const user of collection){
        if(user.toLowerCase() ===  name.toLowerCase()){
            matchingNames.push(name)
        }
    }

    return matchingNames
}