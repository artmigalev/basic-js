function calculateHanoi(disksNumber, turnsSpeed) {
    let turns = Math.pow(2,disksNumber)-1;
    let seconds =/* Math.ceil*/ (turns/(turnsSpeed / 3600))/*.toFixed(1))*/
    // console.log(Math.floor(seconds))
    let hanoi = new Object;
    hanoi.turns = turns;
    hanoi.seconds = Math.floor(seconds);
    return hanoi;
}
function calculateHanoi(disksNumber, turnsSpeed) {
    let resultHanoi = new Object;
    resultHanoi.turns = Math.pow(2,disksNumber)-1;
    resultHanoi.seconds =Math.floor(resultHanoi.turns/(turnsSpeed / 3600))
    return resultHanoi;
}


console.log(calculateHanoi(5, 4007))