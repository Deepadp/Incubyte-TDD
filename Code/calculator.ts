export function add(numbers: string): number {
    // If the input string is empty, return 0
    if (numbers === "") {
        return 0;
    }

    // Checking for custom delimiter
    let delimiter = ",";
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        const delimiterLine = parts[0].slice(2); // Extracting the delimiter line

        // Check if the delimiter is in square brackets
        if (delimiterLine.startsWith("[")) {
            // Extract the delimiter from brackets
            const endBracketIndex = delimiterLine.indexOf("]");
            delimiter = delimiterLine.slice(1, endBracketIndex);
        } else {
            // Regular delimiter
            delimiter = delimiterLine;
        }

        numbers = parts.slice(1).join("\n"); // Removing the delimiter line
    }

    // Splitting the string by the specified delimiter and new lines
    const numArray = numbers.split(new RegExp(`[${delimiter}\n]`))
        .map(num => num.trim())
        .filter(num => num !== "")
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
console.log("New lines between numbers : ", add("1\n2,3"));                // Output: 6
console.log("New lines between numbers : ", add("10\n20,30"));             // Output: 60
console.log("New lines between numbers : ", add("2,3\n4"));                // Output: 9
console.log("Using Delimiters : ", add("//;\n1;2"));              // Output: 3
console.log("Using Delimiters : ", add("//[***]\n1***2***3"));    // Output: 6
console.log("Using Delimiters : ", add("//|\n10|20|30"));         // Output: 60
