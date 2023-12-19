function getCommonCharacterCount( s1, s2) {
    let count = 0;
    let pos = 0;
    for( let i of s1){
        if(s2.indexOf(i) !== -1){
            count+=1;
            s2 = s2.replace(i,'')
        }
    }
    return count;
}



let s1 = "h";
let s2 = "zzzzzzz";
console.log(getCommonCharacterCount(s1,s2))