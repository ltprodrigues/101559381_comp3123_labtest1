const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)){
            reject(new Error("Input must be an array."));
            return;
        }

        const words = mixedArray
            .filter(item => typeof item ==="string")
            .map(word => word.toLowerCase());

            resolve(words)
    })
}

// Test 1: Mixed array — should resolve
lowerCaseWords(["HELLO", 13, "WORLD", true, null])
    .then(result => console.log("Success:", result))
    .catch(error => console.log("Error:", error.message));

// Test 2: Not an array — should reject
lowerCaseWords("HELLO")
    .then(result => console.log("Success:", result))
    .catch(error => console.log("Error:", error.message));