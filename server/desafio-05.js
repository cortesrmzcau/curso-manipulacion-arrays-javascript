const items = [1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 7, 7, 7, 9, 9, 10, 10, 10, 10, 10, 10];

const rta = items.reduce((obj, item) => {
    if (item >= 1 && item <= 5) {
        obj["1-5"] += 1;
    } else if (item >= 6 && item <= 8) {
        obj["6-8"] += 1;
    } else if (item >= 9 && item <= 10) {
        obj["9-10"] += 1;
    }
    return obj;
}, {
    "1-5": 0,
    "6-8": 0,
    "9-10": 0
});

console.log(rta);