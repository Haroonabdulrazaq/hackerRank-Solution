function compareTriplets(a, b) {
  // Write your code
  let first=0;
  let second=0;
  for(let i=0; i< a.length; i++) {
    if (a[i] > b[i]) {
      first++
    }else if (a[i] === b[i])  {
      first + 0
      second + 0
    }else {
      second++
    }
  }

  return [first, second];
}
console.log(compareTriplets([17, 28, 30], [99, 16, 8]));
