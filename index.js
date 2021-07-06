function miniMaxSum(arr) {
  // Write your code here
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const result = arr.reduce((a,b) =>  a+b);
  console.log((result - max), (result - min));
}
console.log(miniMaxSum([1,2,3,4,5]))