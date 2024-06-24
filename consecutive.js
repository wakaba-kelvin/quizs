function hasConsecutiveThrees(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === 3 && nums[i + 1] === 3) {
            return true;
        }
    }
    return false;
}

console.log(hasConsecutiveThrees([1, 3, 3])); 
console.log(hasConsecutiveThrees([1, 3, 1, 3])); 
console.log(hasConsecutiveThrees([3, 3, 3, 1])); 
console.log(hasConsecutiveThrees([1, 2, 3, 4])); 
