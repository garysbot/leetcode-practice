let twoSum = function (nums, target) {
    let targetIndices = [];

    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        let nextNum = nums[i + 1];

        if (currentNum + nextNum === target) {
            targetIndices.push(nums.indexOf(currentNum));
            targetIndices.push(nums.indexOf(nextNum));
        }
    }
    return targetIndices;
}


console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]

console.log(twoSum([3, 2, 4], 6)); // [1, 2]

console.log(twoSum([3, 3], 6)); // [0, 1]

