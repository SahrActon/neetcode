export const problem217 = (nums: number[]): boolean => {
  return new Set(nums).size !== nums.length;
};
console.log(problem217([1, 2, 3, 1]));
