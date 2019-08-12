/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */
/**
 * @param {number} x
 * @return {boolean}
 */
// 暴力转成字符串解决
// var isPalindrome = function (x) {
//     // 非整数或者小于0的都不是回文数
//     if (x % 1 !== 0 || x < 0) {
//         return false;
//     }

//     const xStr = x.toString();
//     const length = xStr.length;
//     let leftStr, rightStr;

//     // 从字符串中间开始截取，数值位数分为偶数位和奇数位分开考虑，如果左右两个字符串反转一个与另一个相同那么就是回文数
//     if (length % 2 === 0) {
//         leftStr = xStr.substring(0, length / 2);
//         rightStr = xStr.substring(length / 2, length);
//     } else {
//         leftStr = xStr.substring(0, (length + 1) / 2);
//         rightStr = xStr.substring((length - 1) / 2, length);
//     }

//     return leftStr === [...rightStr].reverse().join('');
// };

// 不转换为字符串，使用对数确定 x 的位数

var isPalindrome = function (x) {
    const xNum = Number(x);
    // 非整数或者小于0的都不是回文数
    if (xNum % 1 !== 0 || xNum < 0) {
        return false;
    }

    let magnitude = Math.max(Math.floor(Math.log10(xNum)), 0); // 通过取对数再向下取整得到x的数量级
    const xArr = [];
    let nextX = xNum;

    while (magnitude >= 0) {
        const element = Math.floor(nextX / Math.pow(10, magnitude));
        nextX = nextX % Math.pow(10, magnitude);
        xArr.push(element);
        --magnitude;
    }

    let length = xArr.length;

    if (length % 2 !== 0) {
        ++length;
    }

    for (let i = 0; i < length / 2; i++) {
        if (xArr[i] !== xArr[xArr.length - 1 - i]) {
            return false;
        }
    }

    return true;

};