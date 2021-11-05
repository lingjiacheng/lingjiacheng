'use strict';
let arr = [[1, [2, 3], 4], [5, [6, 7], 8, 9]];
function fn(array) {
  array.forEach((item,index) =>{
    if(item instanceof Array){
        arr = arr.concat(fn(item))
    }else{
        arr.push(item)
    }
})
return arr
}
console.log(fn(arr))
