const title = 'La forma de correr Python';

function changeURL(title) {
    const rta = title.split(' ').join('-').toLowercase();
    return rta;
}

console.log(changeURL(title));