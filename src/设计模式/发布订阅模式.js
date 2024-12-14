const eventEmitter = {
    events:{},
    //订阅事件
    on(event,listener){
        if (!this.events[event]) {
            this.events[event] = []
        }
        this.events[event].push(listener)
    },
    //发布事件
    emit(event,...args){
        if (this.events[event]) {
            this.events[event].forEach(listener => listener(...args));
        }
    },
    //取消订阅
    off(event,listener){
        if (!this.events[event]) return
        this.events[event] =  this.events[event].filter(item=>item !== listener)
    },
    //只触发一次的订阅
    once(event,listener){
        const onceListener = (...args) =>{
            listener(...args)
            this.off(event,onceListener)
        }
        this.on(event,onceListener)
    }
}

eventEmitter.once('click', () => { console.log('Clicked once!'); });
eventEmitter.emit('click');
eventEmitter.emit('click');
eventEmitter.emit('click');
/* 
组成部分：
	1.	发布者（Publisher）：负责发布事件，可以是多个。
	2.	订阅者（Subscriber）：负责接收发布的事件，并作出响应。
	3.	事件管理器（Event Manager）：负责管理事件的订阅与发布。它负责存储所有的订阅信息，确保事件发布时可以通知到相应的订阅者。

工作流程：
	1.	订阅：订阅者向事件管理器注册自己对某个事件的关注。注册时会指定一个事件和一个回调函数。
	2.	发布：当发布者发布某个事件时，事件管理器将会触发所有订阅了该事件的回调函数。
	3.	取消订阅：订阅者可以取消对某个事件的关注，不再接收该事件的通知。
	4.	一次性订阅：订阅者也可以选择只接收一次事件，当事件触发后自动取消订阅。
发布-订阅模式非常适合于以下场景：
	•	事件驱动的程序：比如用户界面（UI）上的点击事件、键盘事件、鼠标事件等。
	•	解耦：当你希望模块之间不直接耦合时，可以使用这种模式。
	•	异步通知：比如系统中有多个组件需要响应某个事件，但这些组件之间不需要知道彼此的存在。

*/