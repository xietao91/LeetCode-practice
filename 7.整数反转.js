/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */

// 方法1
var reverse = function (x) {
    const isMinus = x < 0;
    const xAbs = Math.abs(x);
    const xStr = xAbs.toString();
    const xArr = xStr.split('');

    const reversedNum = xArr.reduce((totalNum, item, index) => {
        totalNum += item * Math.pow(10, index);
        return totalNum;
    }, 0);

    if (reversedNum >= Math.pow(2, 31)) {
        return 0;
    }

    return isMinus ? -reversedNum : reversedNum;
};
