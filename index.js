function diagonalDifference(arr) {
  let counter = arr.length-1;
  const firstArr=[];
  const secondArr=[];
  for(let i = 0; i < arr.length; i++) {
   firstArr.push(arr[i][i])
   secondArr.push(arr[i][counter])
    counter--;
  }

  return Math.abs(firstArr.reduce((a,b )=> a+ b) - secondArr.reduce((a,b )=> a+ b))
}
console.log(diagonalDifference([[11, 2, 4],[4, 5, 6], [10, 8, -12]]));
// 11 2 4
// 4 5 6
// 10 8 -12

11, 5, -12
4, 5, 10 