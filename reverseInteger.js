function reverseInteger(n) {
    let str = n.toString();
    let isNegative = str[0] === '-';
    let reversedStr = isNegative 
        ? '-' + str.slice(1).split('').reverse().join('')
        : str.split('').reverse().join('');
    let reversedInt = parseInt(reversedStr, 10);
    return reversedInt;
}

// Example usage:
console.log(reverseInteger(50));  // Output: 5
console.log(reverseInteger(-12)); // Output: -21
