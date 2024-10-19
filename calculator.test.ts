import { add } from './Code/calculator'; // Adjust the import path if necessary

describe('add function', () => {
    test('should return 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });

    test('should return the number itself for a single number', () => {
        expect(add("1")).toBe(1);
    });

    test('should return the sum for two numbers separated by a comma', () => {
        expect(add("1,5")).toBe(6);
    });

    test('should return the sum for three numbers separated by commas', () => {
        expect(add("2,3,4")).toBe(9);
    });

    test('should return the sum for any amount of numbers', () => {
        expect(add("10,20,30,40,5,9")).toBe(114);
    });

    test('should handle new lines between numbers', () => {
        expect(add("1\n2,3")).toBe(6);
    });

    test('should handle new lines with additional spaces', () => {
        expect(add("10\n20,30")).toBe(60);
    });

    test('should handle new lines mixed with commas', () => {
        expect(add("2,3\n4")).toBe(9);
    });

    test('should return the sum using custom single-character delimiter', () => {
        expect(add("//;\n1;2")).toBe(3);
    });

    test('should return the sum using custom multi-character delimiter', () => {
        expect(add("//[***]\n1***2***3")).toBe(6);
    });

    test('should return the sum using another custom delimiter', () => {
        expect(add("//|\n10|20|30")).toBe(60);
    });

    test('should throw an error for non-numeric values', () => {
        expect(() => add("1,a")).toThrow("Invalid input: non-numeric value detected.");
        expect(() => add("1,2\nthree")).toThrow("Invalid input: non-numeric value detected.");
    });
});
