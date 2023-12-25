function calculateHanoi(disksNumber, turnsSpeed) {
    let turns = Math.pow(2,disksNumber);
    let seconds = Math.ceil(turns/(turnsSpeed / 3600).toFixed(1))
    let hanoi = new Object;
    hanoi.turns = turns;
    hanoi.seconds = seconds;
    return hanoi;
}



console.log(calculateHanoi(9, 4308))