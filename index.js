
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
//console.log(traveler3);


function hunt (traveler) {
 if (Math.floor(Math.random() * 100) >= 50) {
     traveler.food += 100;
     return 'Succesful hunt ' + traveler.food;
 } else {
     return 'Did not catch anything';
 }
}; 
hunt(traveler);
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


function join (wagon, traveler) {
    for (i = 0; i < 1; i++) {
        let people = wagon.passengers.push(traveler);
        console.log(wagon.passengers);
        return people;
    }
};

join (wagon, traveler);
join (wagon, traveler2);
join(wagon, traveler3);
join (wagon, traveler4);
join (wagon, traveler5);
join(wagon, traveler6);
console.log(wagon.passengers);


function quarantine (wagon) {
    for (i = 0; i < wagon.passengers.length; i++) {
        console.log('for loop running');
        console.log(wagon.passengers.length);
    if (wagon.passengers[i].Health !== true) {
        console.log(wagon.passengers[i].Health);
        console.log('should log bad health');
        return true;
    } else {
        console.log('should log no bad health')
        return false;
    }
    }
    
};
quarantine(wagon);
console.log(quarantine(wagon));

function food (wagon) {
    let total = 0;
    for (let i = 0; i < wagon.passengers.length; i++) {
    total += wagon.passengers[i].food;
}
return total;
}
console.log(food(wagon));

