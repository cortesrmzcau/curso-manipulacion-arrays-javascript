const items = [1, 3, 2, 3];

const rta = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta);

const data = [
    {
        name: 'Nicolas',
        level: 'Low'
    },
    {
        name: 'Cesar',
        level: 'Low'
    },
    {
        name: 'Dark',
        level: 'Medium'
    }, 
    {
        name: 'Zett',
        level: 'Medium'
    },
    {
        name: 'Faker',
        level: 'Pro'
    },
    {
        name: 'Keria',
        level: 'Pro'
    }
];

const rta2 = data
.map(item => item.level)
.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta2);