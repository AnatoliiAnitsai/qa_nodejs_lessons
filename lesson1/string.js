let a = "   мама   ";
let b = a.trim().toUpperCase().replace(/.$/, "очка,").repeat(3).concat(" ", "ты помила раму?");
console.log(b);