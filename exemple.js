
function deleteDigit(n) {
    let numStr = String(n);
    let min = 0;
    for ( let i =0 ; i<numStr.length; i++){

        if( min < Number(numStr.replace(numStr[i],''))){
            min = Number(numStr.replace(numStr[i],''));
        }
    }
    return min;

}












console.log(deleteDigit(152))/* 52);*/
console.log(deleteDigit(1001))/* 101);*/
console.log(deleteDigit(10))/* 1);*/
console.log(deleteDigit(222219))/* 22229);*/
console.log(deleteDigit(109))/* 19);*/
console.log(deleteDigit(342))/* 42);*/