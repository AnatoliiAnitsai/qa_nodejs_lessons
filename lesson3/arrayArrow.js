function getObjectsSum(someObjects) {
    let sum = 0;
    someObjects.find((element, index, array) => {
        if (element.tags.includes("male"))
            sum = sum + element.value;
    });
    return sum;
}

function getSquareSum(someNumbers) {
    let sum = 0;
    someNumbers.forEach(element => {
        if (!((element * element) % 10 === 0) && !((element * element) % 6 === 0)) {
            sum = sum + element;
        }
    });
    return sum;
}

function distributeGuests(guestsArr) {
    let room1 = [];
    let room2 = [];
    let room3 = [];
    guestsArr.forEach(element => {
        if (!element.hasChild && element.gender === "male" && element.age > 30) {
            room1.push(element.name);
        } else {
            if (!element.hasChild && element.gender === "female" && element.language === "english") {
                room2.push(element.name);
            } else {
                if (!element.hasChild) {
                    room3.push(element.name);
                }
            }
        }
    });
    console.log("room1: " + room1);
    console.log("room2: " + room2);
    console.log("room3: " + room3);
}


