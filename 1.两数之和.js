/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {

//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }

//     }
// };
// var twoSum = function (nums, target) {
//     let map = new Map();
//     let arr = new Array();
//     for (let i in nums) {
//         map.set(nums[i], i);
//     }

//     for (let j = 0; j < nums.length - 1; j++) {
//         if (map.has(target - nums[j]) && map.get(target - nums[j]) != j) {
//             arr.push(j, map.get(target - nums[j]));
//             return arr
//         }
//     }

// }
var twoSum = function (nums, target) {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        if (map[target - nums[i]] >= 0) {
            return [map[target - nums[i]], i]
        }
        map[nums[i]] = i;
    }

}