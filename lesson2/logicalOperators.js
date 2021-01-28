let inputParam = "hllo";

let isNumberTrue = (typeof inputParam == 'number') &&
    (inputParam > 10) &&
    (inputParam % 10 != 0) &&
    (inputParam % 5 != 0);

let isStringTrue = (typeof inputParam == 'string') &&
    (inputParam == inputParam.toLowerCase()) &&
    (inputParam != "") &&
    (inputParam == inputParam.trim()) &&
    (inputParam.search(/a|c|e/) == -1);

if (isNumberTrue || isStringTrue){
    console.log(inputParam);
}else {
    console.log('sorry')
}



