/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

function smallest(arr) {
    let count = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < count) {
            count = arr[i];
        }
    }
    return count;
}

let minValueCallback = function(arr, cb) {
    if (cb === undefined) {
        return smallest(arr);
    } else {
        let res = [];
        for (let i = 0; i < arr.length; i++) {
            res.push(cb(arr[i]));
        }
        return smallest(res);
    }
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
