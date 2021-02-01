function makeSomeArray(n, step = 1, isReverse = false) {
    let someArray = [];
    for (let i = 1; i <= n; i = i + step) {
        someArray.push(i);
    }
    if (!isReverse)
        return someArray;
    else
        return someArray.reverse();
}


function printSomeArray(someArray) {
    let halfIndex;
    if (someArray.length % 2 === 0)
        halfIndex = someArray.length / 2 - 1;
    else
        halfIndex = Math.ceil(someArray.length / 2) - 1;

    let firstHalfOfArray = [];
    let secondHalfOfArray = [];
    someArray.forEach((element, index, array) => {
        if (index <= halfIndex)
            firstHalfOfArray.push(element);
        else
            secondHalfOfArray.push(element);
    });
    console.log("first half: " + firstHalfOfArray);
    console.log("second half: " + secondHalfOfArray.reverse());
}
