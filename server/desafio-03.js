const letters = ['amor', 'sol', 'piedra', 'día', 'programacion'];

function only4letters(letters) {
    return letters.filter(item => item.length >= 4)
}

console.log(only4letters(letters));