const products = [
    {
        name: 'Doritos 600g',
        price: 100,
        stock: 100
    },
    {
        name: 'Rufles 600g',
        price: 18,
        stock: 50
    },
    {
        name: 'Coca cola 600 ml',
        price: 15,
        stock: 200
    },
    {
        name: 'Bimbo grande 800g',
        price: 40,
        stock: 20
    }
];

console.log("original", products);
const products_taxes = products.map((item) => {
    return {
        ... item,
        taxes: item.price * 0.19
    }    
});
console.log("taxes", products_taxes);