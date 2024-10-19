// Allow the add method to handle new lines between numbers (instead of commas). ("1\n2,3" should return 6)

export function add(numbers: string): number {
    // If the input string is empty, return 0
    if (numbers === "") {
        return 0;
    }

    // Splitting the string by commas and new lines, then trimming and filtering out empty strings
    const numArray = numbers.split(/[\n,]/) // Splitting on both commas and new lines
                             .map(num => num.trim())
                             .filter(num => num !== "")
                             .map(num => parseInt(num, 10));

    // Checking for non-numeric values
    for (const num of numArray) {
        if (isNaN(num)) {
            throw new Error("Invalid input: non-numeric value detected.");
        }
    }

    // Summing up the numbers and returning the result
    return numArray.reduce((sum, num) => sum + num, 0);
}

console.log("Empty String : ", add(""));                       // Output: 0
console.log("With one number : ", add("1"));                     // Output: 1
console.log("With two numbers : ", add("1,5"));                    // Output: 6
console.log("With three numbers : ", add("2,3,4"));                  // Output: 9
console.log("Any amount of numbers : ", add("10,20,30,40, 5,   9"));   // Output: 114
console.log("New lines between numbers : ", add("1\n2,3"));              // Output: 6
console.log("New lines between numbers : ", add("10\n20,30"));             // Output: 60
console.log("New lines between numbers : ", add("2,3\n4"));                 // Output: 9
