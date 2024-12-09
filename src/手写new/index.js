function myNew(Con,...args) {
    const obj = {}
    obj.__proto__ = Con.prototype
    let res = Con.apply(obj,args)
    return res instanceof Object ? res : obj
}

function Person(name){
    this.name = name
}

const person = myNew(Person,"小明")
console.log(person);
