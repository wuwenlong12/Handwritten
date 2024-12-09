Array.prototype.reduceMap = function(callback,initialValue){
if (typeof callback !== 'function') {
        throw new TypeError(callback + " is not a function");
    }
if (this == null) {
    return new TypeError("调用者不能为null")
}

let acc = initialValue
const res = []
const array = this
let startIndex = 0

if (initialValue === undefined) {
     startIndex = 1
     acc = array[0]
     res.push(array[0])
}

for (let i = startIndex; i < array.length; i++) {
    acc =  callback(acc,array[i],i,array)
    res.push(acc)
}
return res
}

const arr = [1, 2, 3];
const res = arr.reduceMap((acc, cur) => {
  return acc + cur;
}, 1);
console.log(res);
