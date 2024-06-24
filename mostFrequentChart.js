function mostFrequentCharacter(input) {
    const charCount = {};

    for (let char of input) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    let maxCount = 0;
    let maxChar = '';
    for (let char in charCount) {
        if (charCount[char] > maxCount) {
            maxCount = charCount[char];
            maxChar = char;
        }
    }

    return maxChar;
}

console.log(mostFrequentCharacter('11189')); 
console.log(mostFrequentCharacter('hello')); 
