const validationChecker = (nums: number[], target: number): boolean =>{
    if (nums.length < 2 || nums.length > 1000) return false

    for (const element of nums){
        if (element < -10000000 || element >10000000)  return false
    }
    if (target < -10000000 || target >10000000)  return false
    return true;
}

const twoSum = (nums: number[], target:number ): number[] =>{
    const isValid = validationChecker(nums,target)

    if  (isValid) {
     nums = nums.sort((a,b) => a-b)
        for (let i = 0;  i < nums.length; i++){
            let j = 1 + i

            if (i + j === target){
                return [nums[i],nums[j]]
            }
        }
    }
    return []
}

const myArray = [1,23,4,2,3]
console.log(twoSum(myArray, 5))
