export function add(calculator: string): number {
    // If the input string is empty, return 0
    if (calculator === "") {
        return 0;
    }

    // Checking for custom delimiter
    let delimiter = ",";
    if (calculator.startsWith("//")) {
        const parts = calculator.split("\n");
        const delimiterLine = parts[0].slice(2); // Extracting the delimiter line

        // Checking if the delimiter is in square brackets
        if (delimiterLine.startsWith("[")) {
            const endBracketIndex = delimiterLine.indexOf("]");
            delimiter = delimiterLine.slice(1, endBracketIndex);
        } else {
            delimiter = delimiterLine;
        }

        calculator = parts.slice(1).join("\n"); // Removing the delimiter line
    }

    // Splitting the string by the specified delimiter and new lines
    const numArray = calculator.split(new RegExp(`[${delimiter}\n]`))
                             .map(num => num.trim())
                             .filter(num => num !== "")
                             .map(num => {
                                 const parsedNum = parseInt(num, 10);
                                 if (isNaN(parsedNum)) {
                                     throw new Error("Invalid input: non-numeric value detected.");
                                 }
                                 return parsedNum;
                             });

    // Checking for negative numbers
    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`Negative numbers are not allowed: ${negatives.join(", ")}`);
    }

    // Summing up the numbers and returning the result
    return numArray.reduce((sum, num) => sum + num, 0);
}


console.log("Empty String : ", add(""));                               // Output: 0
console.log("With one number : ", add("1"));                           // Output: 1
console.log("With two numbers: ", add("1,5"));                         // Output: 6
console.log("With three numbers :", add("2,3,4"));                     // Output: 9
console.log("Any amount of numbers : ", add("10,20,30,40, 5,   9"));   // Output: 114
console.log("New lines between numbers : ", add("1\n2,3"));            // Output: 6
console.log("New lines between numbers : ", add("10\n20,30"));         // Output: 60
console.log("New lines between numbers : ", add("2,3\n4"));            // Output: 9
console.log("Using Delimiters : ", add("//;\n1;2"));                   // Output: 3
console.log("Using Delimiters : ", add("//[***]\n1***2***3"));         // Output: 6
console.log("Using Delimiters :", add("//|\n10|20|30"));               // Output: 60

// Testing negative number handling
try {
    console.log(add("-1,2"));              // Should throw an error
} catch (e: unknown) {
    if (e instanceof Error) {
        console.error(e.message);          // Output: Negative numbers not allowed: -1
    }
}

try {
    console.log(add("//;\n1;-2;3;-4"));    // Should throw an error
} catch (e: unknown) {
    if (e instanceof Error) {
        console.error(e.message);          // Output: Negative numbers not allowed: -2, -4
    }
}
