const Subject = {
    observers: [], // 存储所有观察者
  
    // 注册观察者
    addObserver(observer) {
      this.observers.push(observer);
    },
  
    // 移除观察者
    removeObserver(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
    },
  
    // 通知所有观察者
    notifyObservers() {
      this.observers.forEach(observer => observer.update());
    }
  };
  
  // 观察者对象构造函数
  function Observer(updateFunction) {
    this.update = updateFunction;
  }
  
  // 创建观察者
  const observer1 = new Observer(() => {
    console.log('Observer 1 updated');
  });
  const observer2 = new Observer(() => {
    console.log('Observer 2 updated');
  });
  
  // 注册观察者
  Subject.addObserver(observer1);
  Subject.addObserver(observer2);
  
  // 通知所有观察者
  Subject.notifyObservers();
  
  // 移除一个观察者
  Subject.removeObserver(observer1);
  
  // 再次通知所有观察者
  Subject.notifyObservers();