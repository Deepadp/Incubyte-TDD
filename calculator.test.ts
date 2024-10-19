import { add } from './Code/calculator';

describe('String Calculator', () => {
    test('should return 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });

    test('should return the number itself for a single number', () => {
        expect(add("1")).toBe(1);
        expect(add("5")).toBe(5);
    });

    test('should return the sum for two numbers', () => {
        expect(add("1,5")).toBe(6);
        expect(add("10,20")).toBe(30);
    });

    test('should return the sum for multiple numbers', () => {
        expect(add("1,2,3,4,5")).toBe(15);
        expect(add("10,20,30,40")).toBe(100);
    });

    test('should handle numbers with spaces', () => {
        expect(add("1, 2, 3")).toBe(6);
        expect(add("10, 20, 30")).toBe(60);
    });

    test('should handle leading and trailing commas', () => {
        expect(add(",1,2,")).toBe(3);
        expect(add(",,3,4,,")).toBe(7);
    });
});
