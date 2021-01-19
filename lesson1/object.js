let a = {};

a.numberKey = 10;
a.strKey = "hello";
a.booleanKey = true;
a.nullKey = null;
a.undefinedKey = undefined;
console.log(a);

a.numberKey++;
a.strKey = a.strKey.toUpperCase();
delete a.nullKey;
delete a.undefinedKey;
console.log(a);

let b = Object.assign({}, a);
delete b.booleanKey;
console.log(b);