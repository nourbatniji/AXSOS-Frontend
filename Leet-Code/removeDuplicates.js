let nums = [1, 1, 3, 3, 2, 2] //output should be [0, 4, 2, 54, 3]
nums.sort()
console.log(nums);

function removeDuplicates(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if(nums[i] !== nums[j]){
                console.log(false);
                
            }
            
        }
    }
};

console.log(removeDuplicates(nums));
