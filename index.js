
let wagon = makeWagon(5);
let traveler = makeTraveler('Henrietta');
let traveler2 = makeTraveler('Juan');
let traveler3 = makeTraveler('Bob');
//hunt(traveler);

function makeTraveler (name) {
    let food = Math.floor(Math.random() * 100);
    let isHealthy = true;
    if (food < 20) {
        isHealthy = false;
    }
    return {
    name: name,
    food: food,
    Health: isHealthy,
    }
};
console.log(traveler3);

function makeWagon (capacity, passengers) {
    return {
        capacity,
        passengers: [],

    }
}; 
console.log(wagon);


function hunt (traveler) {
 if (Math.floor(Math.random() * 100) >= 50) {
     traveler.food += 100;
     return 'Succesful hunt' + traveler.food;
 } else {
     return 'Did not catch anything';
 }
}; 
console.log(hunt(traveler));

 function eat (traveler) {
     if (traveler.food < 20) {
         traveler.isHealthy = false;
         return 'not enough to eat. Health status: ' + traveler.isHealthy;
     }else{
         traveler.food -= 20;
         return 'lets eat ' + traveler.food;
     }
 };
console.log(eat(traveler));


//not working

function join (wagon, traveler) {
    for (let i = 0; i < wagon.passengers.length; i++) {
        if (0 === 0) {
            let passengers = wagon.passengers.push(traveler);
            console.log(wagon.passengers.push(traveler));
        } return passengers; 
    }  
};
console.log(join(wagon, traveler));
// end of not working

// function quarantine (wagon) {
//     if (wagon.passengers.traveler.isHealthy === false) {
//         return true;
//     } else {
//         return false;
//     }
// };
// console.log(quarantine(wagon));

function food (wagon) {
    let total = 0;
    for (let i = 0; i < wagon.passengers.length; i++) {
    total += wagon.passengers[i].food;
}
return total;
}
console.log(food(wagon));
/**
 * Create two different types of objects: a traveler and a wagon.

A traveler has a few properties: an amount of food (number), a name (string), and an isHealthy (boolean).

A wagon has a few properties as well: a passengers list (array) and a capacity (number).


hunt(traveler); // maybe get more food
eat(traveler2);
eat(traveler2); // juan is hungry
join(wagon, traveler);
join(wagon, traveler2);

console.log(quarantine(wagon)); // print true if someone is sick, false otherwise
console.log(food(wagon)); // print juan's food + henrietta's food
 */

