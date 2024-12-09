Array.prototype.myReduce = function(callback, initialValue) {
    // 判断数组是否为空
    if (this == null) {
        throw new TypeError("Array.prototype.myReduce called on null or undefined");
    }
    if (typeof callback !== 'function') {
        throw new TypeError(callback + " is not a function");
    }

    const array = this; // 获取当前数组
    let accumulator = initialValue; // 初始化累加器
    let startIndex = 0; // 起始索引

    // 如果没有提供 initialValue，使用数组的第一个元素作为初始值
    if (accumulator === undefined) {
        if (array.length === 0) {
            throw new TypeError("Reduce of empty array with no initial value");
        }
        accumulator = array[0];
        startIndex = 1; // 从第二个元素开始
    }

    // 遍历数组并执行回调函数
    for (let i = startIndex; i < array.length; i++) {
        if (i in array) { // 跳过稀疏数组的空洞
            accumulator = callback(accumulator, array[i], i, array);
        }
    }

    return accumulator; // 返回最终的累加值
};

const arr = [1, 2, 3];
const res = arr.myReduce((acc, cur) => {
  return acc + cur;
}, 6);
console.log(res);
