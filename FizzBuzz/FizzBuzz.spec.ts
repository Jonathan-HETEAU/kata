import { fizzBuzz } from "./FizzBuzz";

test('retourne 1', () => {
    expect(fizzBuzz(1)).toBe("1");
});

test('retourne Fizz', () => {
    expect(fizzBuzz(3)).toBe("Fizz");
});

test('retourne Buzz', () => {
    expect(fizzBuzz(5)).toBe("Buzz");
});

test('retourne FizzBuzz',() => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
});