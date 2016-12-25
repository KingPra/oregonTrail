
let wagon = {
capacity: 5,
passengers: [],
};
let traveler = makeTraveler('Henrietta');
let traveler2 = makeTraveler('Juan');
let traveler3 = makeTraveler('Bob');
let traveler4 = makeTraveler('Tim');
let traveler5 = makeTraveler('Broseph');
let traveler6 = makeTraveler('bro man from the 5th flo');
//hunt(traveler);



join (wagon, traveler);
join (wagon, traveler2);
join(wagon, traveler3);
join (wagon, traveler4);
join (wagon, traveler5);
join(wagon, traveler6);

eat(traveler);
eat(traveler2);
eat(traveler2);

quarantine(wagon);

console.log(quarantine(wagon));
console.log(food(wagon));

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

function hunt (traveler) {
 if (Math.floor(Math.random() * 100) >= 50) {
     traveler.food += 100;
     return 'Succesful hunt ' + traveler.food;
 } else {
     return 'Did not catch anything';
 }
}; 

 function eat (traveler) {
     if (traveler.food < 20) {
         traveler.isHealthy = false;
         return 'not enough to eat. Health status: ' + traveler.isHealthy;
     }else{
         traveler.food -= 20;
         return 'lets eat ' + traveler.food;
     }
 };

function join (wagonName, travelerName) {
        if (wagon.passengers.length <= wagon.capacity) {
        let people = wagon.passengers.push(traveler);
        return people;
    } else {
        return 'not enough room';
    
    }
};
console.log(join());

function quarantine (wagon) {
    for (let i = 0; i < wagon.passengers.length; i++) {
    if (wagon.passengers[i].Health !== true) {
        return true;
    } else {
        return false;
    }
    }
    
};

function food (wagon) {
    let total = 0;
    for (let i = 0; i < wagon.passengers.length; i++) {
    total += wagon.passengers[i].food;
}
return total;
}
