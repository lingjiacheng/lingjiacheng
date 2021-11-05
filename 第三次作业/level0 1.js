'use strict';
 let a = new Object();
 a.name = 'xiaoming';
 a.age = 10;

let obj = {
    name: 'xiaohong',
    age: 12
}

function Person(){
    this.name = 'xiaohuang';
    this.age = 11;
}
let p = new Person();

function copy(insertObj){
    let newObj = {};
    for(let i in insertObj){
        newObj[i] = insertObj[i];
    }
    return newObj;
}
let obj1 = copy(obj);
let obj2 = copy(obj);
let obj3 = copy(obj);
let arr = [];
arr.push(obj1,obj2,obj3);
console.table(arr);
