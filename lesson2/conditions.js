let inputStr = "123";

if (inputStr.trim().slice(0, 2).toUpperCase() == "UP") {
    console.log("up");
}else if (inputStr.trim().slice(0, 4).toUpperCase() == "DOWN"){
    console.log("down \nstop");
}else{
    console.log("stop");
}

let inputValue = 12;

if((typeof inputValue) == "string"){
    console.log("string: " + inputValue.toLowerCase());
}else {
    if (typeof inputValue == "number")
       switch (inputValue % 10){
           case (2 || 4):
               console.log("testhhhhhhhhhhhh");
       }
}
