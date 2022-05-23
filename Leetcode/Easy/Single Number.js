/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
 

Constraints:

1 <= nums.length <= 3 * 10^4
-3 * 10^4 <= nums[i] <= 3 * 10^4
Each element in the array appears twice except for one element which appears only once.
 */

var singleNumber = function (nums) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) map[nums[i]]++;
    else map[nums[i]] = 1;
  }

  return Object.keys(map).find(key => map[key] === 1);
};