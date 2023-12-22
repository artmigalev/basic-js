function encodeLine(str) {
    let resultStr = '';
    let char = str[0]
    let count = 0;
    for( let i = 0; i<= str.length; i++){
        if( char === str[i]){
            count++;

        }else {
            if ( count <= 1){
                resultStr +=char;
                char = str[i];
                count =0;
            }else {
                resultStr = resultStr + count + char;
                char = str[i];
                count =0;
            }
            count++

        }
    }
    return resultStr;





    return resultStr;



}


console.log(encodeLine(''))