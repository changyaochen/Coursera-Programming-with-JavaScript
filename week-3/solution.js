// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
    for (let d of dairy) {
        console.log(d);
    }
}

logDairy();

// Task 2
const animal = {
    canJump: true
};

const bird = Object.create(animal);

bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (let [key, value] of Object.entries(bird)) {
        console.log(`${key}: ${value}`);
    }
}

// Task 3
function animalCan() {
    for (let key in bird) {
        console.log(`${key}: ${bird[key]}`);
    }
}
