function flatten(arr) {
    const result = [];
    function flattenItem(item) {
      if (Array.isArray(item)) {
        for (let i = 0; i < item.length; i++) {
          flattenItem(item[i]);  
        }
      } else {
        result.push(item);
      }
    }
    flattenItem(arr);
    return result;
  }


console.log(flatten([1, [2, [3, [4, 5]]]]) );
