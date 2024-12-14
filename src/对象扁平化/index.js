const flattenObject = (obj) => {
    const result = {};
  
    const flattenObjectItem = (item, prefix = "") => {
      for (const key in item) {
        if (item.hasOwnProperty(key)) {  // 需要传入 key
          const newKey = prefix ? `${prefix}.${key}` : key;
          if (typeof item[key] === 'object' && item[key] !== null) {
            // 递归调用，修正 Object[key] -> item[key]
            Object.assign(result, flattenObjectItem(item[key], newKey));
          } else {
            result[newKey] = item[key];
          }
        }
      }
      return result; // 添加返回值
    };
  
    flattenObjectItem(obj); // 调用递归函数
    return result;
  };

console.log(flattenObject({
    a: 1,
    b: {
      b1: 2,
      b2: {
        b21: 3,
        b22: 4,
      },
    },
    c: 5,
  }));

