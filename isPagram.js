function isPangram(input) {
    
    const lowerCaseInput = input.toLowerCase();

    
    const alphabetSet = new Set();

    for (let char of lowerCaseInput) {
        if (char >= 'a' && char <= 'z') {
            alphabetSet.add(char);
        }
    }

    return alphabetSet.size === 26;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog')); 
console.log(isPangram('Hello, world!')); 
