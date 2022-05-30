const months = ['March', 'Jan', 'Feb', 'Dec'];

months.sort();
console.log(months);

const numbers = [1, 30, 4, 21, 1000];
numbers.sort((a,b) => a - b);
console.log(numbers);
const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];
words.sort((a,b) => a.localeCompare(b));
console.log(words);
const orders = [
    {
      customerName: "Nicolas",
      total: 600,
      delivered: true,
      date: new Date (2022, 3, 8, 4)
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
      date: new Date (2022, 9, 12, 3)
    },
    {
      customerName: "Santiago",
      total: 1840,
      delivered: true,
      date: new Date (2022, 8, 2, 2)
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
      date: new Date(2022, 1, 1, 9, 30)
    },
  ];

//   orders.sort((a,b) => a.total - b.total);
//   console.log(orders);

  // Reto

  orders.sort((a,b) => a.date - b.date);
  console.log(orders);