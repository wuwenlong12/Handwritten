const deepClone = (target, map = new WeakMap()) => {
  if (typeof target !== "object" || target === null) {
    return target;
  }

  if (map.has(target)) {
    return map.get(target);
  }
  const getType = (item) => {
    return Object.prototype.toString.call(item).slice(8, -1);
  };
  const type = getType(target);
  let currentItem;

  switch (type) {
    case "Object":
      currentItem = {};
      break;
    case "Array":
      currentItem = [];
      break;
    case "Map":
      currentItem = new Map();
      break;
    case "Set":
      currentItem = new Set();
      break;
    case "Date":
      return new Date(target);
    case "RegExp":
      return new RegExp(target);
    case "Buffer":
      return Buffer.from(target); // 适用于 Node.js 环境
    case "Error":
      return new Error(target.message); // 适用于 Error 对象
    default:
      return target;
  }

  map.set(target, currentItem);

  if (type === "Object") {
    for (let key in target) {
      if (target.hasOwnProperty(key)) {
        currentItem[key] = deepClone(target[key], map);
      }
    }
  } else if (type === "Array") {
    target.forEach((item, index) => {
      currentItem[index] = deepClone(target[index], map);
    });
  } else if (type === "Map") {
    target.forEach((value, key) => {
      currentItem.set(key, deepClone(value, map));
    });
  } else if (type === "Set") {
    target.forEach((value) => {
      currentItem.add(deepClone(value, map));
    });
  }

  return currentItem;
};

// 示例对象 obj
const obj = {
  a: {
    a1: 1,
  },
  b: [1, 2, 3],
  c: new Map([["key1", "value1"]]),
  d: new Set([1, 2, 3]),
  e: new Date("2024-01-01"),
  f: /abc/i,
  g: new Error("Something went wrong"),
  h: Buffer.from("Hello, World!"),
};

// 调用 deepClone 进行深拷贝
const obj1 = deepClone(obj);

// 修改 obj1 的值，验证 obj 和 obj1 的独立性
obj1.b[0] = 100; // 修改数组中的第一个元素
obj1.c.set("key1", "修改的value"); // 修改 Map 中的 value
obj1.e.setFullYear(2025); // 修改 Date 对象
obj1.f = /xyz/; // 修改 RegExp 对象
obj1.g.message = "New error"; // 修改 Error 对象
obj1.h.write("Hello, Deep Clone!"); // 修改 Buffer 对象

// 打印 obj1 和 obj 的变化
console.log("修改后的 obj1:");
console.log(obj1);
console.log("原始 obj:");
console.log(obj);
