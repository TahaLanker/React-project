console.log('Inside Utils.js file!!');

const square = (x) => x * x;

const add = (a,b) => a + b;

const subtract = (a,b) => a - b;

export { square, add, subtract as default };


//alternative way
//export const add = (a,b) => a + b;
//export default const subtract = (a,b) => a - b;   //ERROR***

//const subtract = (a,b) => a - b;
//export default subtract;
//or//
//export default (a,b) => a - b;