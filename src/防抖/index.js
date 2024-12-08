function debounce(callback, time = 200) {
  let timer = null;
  return function (...arg) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this,arg);
    }, time);
  };
}

export {debounce}

//用于登录按钮防止用户重复点击，调整浏览器窗口，resize次数过于频繁导致计算过多，搜索框用户输入返程后再发送请求，文本编辑器保存。。。

// const obj = {
//     value: 42,
//     method: debounce(function() {
//       console.log(this.value);
//     }, 200),
//   };

// 如果不绑定 this：
// this 在 setTimeout 的回调中默认指向全局对象，this.value 会变成 undefined 或抛出错误。