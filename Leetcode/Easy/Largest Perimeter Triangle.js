/*
Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

 

Example 1:

Input: nums = [2,1,2]
Output: 5
Example 2:

Input: nums = [1,2,1]
Output: 0
 

Constraints:

3 <= nums.length <= 10^4
1 <= nums[i] <= 10^6
*/

var largestPerimeter = function(nums) {
    sortedNums = nums.sort((a, b) => a - b);
    
    for (let i = nums.length - 1; i >= 2; i--) {
      if (sortedNums[i] < sortedNums[i - 1] + sortedNums[i - 2]) 
        return sortedNums[i] + sortedNums[i - 1] + sortedNums[i - 2]; 
    }
    
    return 0;
};