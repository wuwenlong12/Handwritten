function throttle(callback, time = 200) {
  let flag = false
  return function (...arg) {
    if (flag) return
    flag = true
    setTimeout(()=>{
      callback.apply(this,arg)
      flag = false
    },time) 
  }
}

export {throttle}

//鼠标连续点击出发某事件，单位时间只能出发一次，比如抽奖...
// 监听滚动事件，接听到底部加载更多
// 浏览器播放事件 每一秒记录一次进度信息


// const obj = {
//     value: 42,
//     method: throttle(function() {
//       console.log(this.value);
//     }, 200),
//   };

// 如果不绑定 this：
// this 在 setTimeout 的回调中默认指向全局对象，this.value 会变成 undefined 或抛出错误。