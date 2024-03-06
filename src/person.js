console.log('In person.js');

export const isAdult = (age) => age > 18 ? true : false;

export const isEligible = (age) => age > 30 ? true : false;

export default (age) => age > 65 ? true : false;