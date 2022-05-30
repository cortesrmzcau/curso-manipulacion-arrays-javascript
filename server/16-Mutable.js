const products = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];

const myProducts = [];

console.log('products', products);
console.log('myProducts', myProducts);
console.log("-".repeat(10));

const productIndex = products.findIndex(item => item.id === '🍔');

if (productIndex !== -1) {
    myProducts.push(products[productIndex]);
    products.splice(productIndex, 1);
}

console.log('products', products);
console.log('myProducts', myProducts);
console.log('-'.repeat(10));

// Update

const productsV2 = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];

const update = {
    id: "🥞",
    changes:  {
        price: 200,
        description: 'delicioso'
    }
}

// const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
// productsV2[productIndexV2] = {
//     ...productsV2[productIndexV2],
//     ...update.changes
// }

console.log('original', productsV2);

// Reto 1

const rta = products.filter(item => item != '🥞');
console.log('products', products);
console.log('sin eliminar el original');

// Reto 2

const rta2 = productsV2.map(item => {
    if (item.id === update.id) {
        return  {
            ...item,
            ...update.changes
        }
    } else {
        return {
            ...item
        }
    }
})

console.log('rta2', rta2);