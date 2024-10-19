// Input: a string of comma-separated numbers
// Output: an integer, sum of the numbers

export function add(calculator: string): number {
    // If the input string is empty, return 0
    if (calculator === "") {
        return 0;
    }

    // Spliting the string by commas and converting to numbers
    const numArray = calculator.split(",").map(num => parseInt(num, 10));

    // Summing the numbers and returning the result
    return numArray.reduce((sum, num) => sum + num, 0);
}
console.log("Empty String : ", add(""));       // Output: 0
console.log("With one number : ",add("1"));       // Output: 1
console.log("With two numbers : ", add("1,5"));    // Output: 6
console.log("With three numbers : ", add("2,3,4"));  // Output: 9
