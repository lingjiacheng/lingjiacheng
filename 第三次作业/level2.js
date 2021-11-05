'use strict';
let arr = [[1, [2, 3], 4], [5, [6, 7], 8, 9]];
  function flat(arr){
    return arr.reduce((prev,next) => {
        return prev.concat((next instanceof Array) ? flat(next):next)
     },[])
  }
 console.log(flat(arr));
console.log(arr)
