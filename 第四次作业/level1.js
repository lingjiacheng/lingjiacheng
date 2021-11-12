// function factorial(n){
//     if (n == 1)
//       return n
//     else
//       return n* factorial(n-1)
// }
// alert(factorial(6))
function factorial(n){
  let i=n;
  let a=i;
  while(i>1){
    a=a*--i;
  }
  return a
}
alert(factorial(6))