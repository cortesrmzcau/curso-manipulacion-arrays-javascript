const elements = ['Fire', 'Air', 'Water'];

let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    if (index === elements.length -1) {
        rtaFinal = rtaFinal + element;
    } else {
        rtaFinal = rtaFinal + element + separator;
    }
}

const rta = elements.join('--');
console.log('for', rtaFinal);
console.log('rta', rta);

const title = 'Curso de manipulación de Arrays';

const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal);