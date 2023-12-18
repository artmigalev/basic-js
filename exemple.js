function createDreamTeam(members) {
    if(Array.isArray(members)){

        let arrStr = members.filter((e) =>  typeof e === 'string')
        let notTrim = arrStr.map((el) =>el.trim())
        let arrTrue = notTrim.map((el) => {
            return el[0].toUpperCase()
        })
        return arrTrue.sort().join('');
    }else {
        return false;
    }
}


console.log(createDreamTeam([

    ['David Abram'],
    ['Robin Attfield'],
    'Thomas Berry',
    ['Paul R.Ehrlich'],
    'donna Haraway',
    ' BrIaN_gOodWiN  ',
    {
        0: 'Serenella Iovino'
    },
    'Erazim Kohak',
    '  val_plumwood',
])) /* 'BDETV'*/

// console.log( [ 'William' ,'Alston ' ].sort())