function flatten(arr) {
    const result = [];
    const stack = [...arr]
    while (stack.length) {
        let item  =stack.pop()
        if (Array.isArray(item)) {
            stack.push(...item)
        }else{
            result.push(item)
        }
    }
    return result.reverse();
  }


console.log(flatten([1, [2, [3, [4, 5]]]]) );