const words = ['ana', 'santi', 'cesar', 'dark', 'abuelo'];

function search(words, query) {
    const rta = words.filter(word => {
        return word.includes(query);
    });

    return rta;
}

console.log(search(words, 'ce'));