function findMatching(driverArr,str){
    let matchingDriver = driverArr.filter( function(user) {
     if(user.toLowerCase() === str.toLowerCase()){
         return user;
     } 
    })
    return matchingDriver;
}

function fuzzyMatch(driverArr,str){
    let matchingDriver = driverArr.filter(function(user){
        if(user.startsWith(str)){
            return user;
        }
    })
    return matchingDriver;
}

function matchName(driverArr,str){
    let matchingEl = driverArr.filter(function(user){
        if(str === user.name){
            return user
        }
    })
    return matchingEl;
}


const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

console.log(matchName(drivers, `Bobby`));