import { TestWatcher } from "jest";

const add = (x, y) => x + y;
const greeting = (name) => `Hello ${name}`;

test('Add two numbers', () => {
    const result = add(5, 6);

    //(result !== 10){
        //throw new Error(`Expected result is 10. you are getting ${result}`);
    //}
    expect(result).toBe(11);
});

test('Show greeting', () => {
const greeting = (name) => `Hello ${name}`;
    const name = greeting('Taha');
    expect(name).toBe('Hello Taha');
});