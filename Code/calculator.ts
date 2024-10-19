// Allow the add method to handle any amount of numbers.
export function add(numbers: string): number {
    if (numbers === "") {
        return 0;
    }

    // Splitting the string by commas, filtering out empty strings, and converting to numbers
    const numArray = numbers.split(",")
                             .map(num => num.trim()) // Trim whitespace
                             .filter(num => num !== "") // Remove empty entries
                             .map(num => parseInt(num, 10));

    // Checking for non-numeric values
    for (const num of numArray) {
        if (isNaN(num)) {
            throw new Error("Invalid input: non-numeric value detected.");
        }
    }

    // Summing the numbers and returning the result
    return numArray.reduce((sum, num) => sum + num, 0);
}

console.log("Empty String : ", add(""));                      // Output: 0
console.log("With one number : ", add("1"));                     // Output: 1
console.log("With two numbers : ", add("1,5"));                   // Output: 6
console.log("With three numbers : ", add("2,3,4"));                 // Output: 9
console.log("Any amount of numbers : ", add("10,20,30,40, 5,   9"));   // Output: 114
