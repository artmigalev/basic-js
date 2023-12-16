function dateSample(sampleActivity) {
    const MODERN_ACTIVITY = 15;
    const HALF_LIFE_PERIOD = 5730;
    if(typeof sampleActivity === 'string'){
        sampleActivity = Number(sampleActivity)
        if (isFinite(sampleActivity) && sampleActivity < 9000 && sampleActivity > 0 && sampleActivity != 15.1 ){
            let k = (0.693 / HALF_LIFE_PERIOD)
            let a = Math.log(MODERN_ACTIVITY/Number(sampleActivity))
            let t = a/k

            return isFinite(t ) ? Math.ceil(t) :false
        } else {

            return false
        }

    }
    else{
        return false;
    }
}
console.log(dateSample(''))
console.log(dateSample(false))
console.log(dateSample(3))
console.log(dateSample('3'))
console.log(dateSample(null))
console.log(dateSample("15.1"))


const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
