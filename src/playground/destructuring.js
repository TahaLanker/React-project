// console.log('On=bject Destructing!!');
// const book = {
//     name: 'Harry Potter',
//     author: 'J.K. Rowling',
//     publisher: {
//         name: 'Bloomsbury'
//     }
// };
// const { name: publisherName = 'Self-Pusblished' } = book.publisher;
// console.log('Publisher Name: ', publisherName);

console.log('Array Destructuring!!');
const item = ['Coffee (hot)', '$2.00', '$2.50', '$3.00'];

const [coffee , , mediumCoffeeCost] = item;
console.log(`Medium ${coffee} costs ${mediumCoffeeCost}`);