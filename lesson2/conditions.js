let inputStr = "123";

if (inputStr.trim().slice(0, 2).toUpperCase() == "UP") {
    console.log("up");
} else if (inputStr.trim().slice(0, 4).toUpperCase() == "DOWN") {
    console.log("down \nstop");
} else {
    console.log("stop");
}

let inputValue = 18;

if ((typeof inputValue) == "string") {
    console.log("string: " + inputValue.toLowerCase());
} else {
    if (typeof inputValue == "number")
        switch (inputValue % 10) {
            case 2:
            case 4:
                console.log("less than five");
                break;
            case 6:
            case 8:
                console.log("great than five");
                break;
            case(0):
                console.log("multiple of ten");
                break;
            default:
                console.log("odd number");
                break;
        }
}
