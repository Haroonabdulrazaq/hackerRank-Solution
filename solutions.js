// Simple Array Sum
function simpleArraySum(ar) {
  // Write your code here
  return ar.reduce((a,b) =>  a + b);
}
console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));


// compare Triplets
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
console.log(compareTriplets([17, 28, 30], [99, 16, 8]))

//Very Big Sum
function aVeryBigSum(ar) {
  // Write your code here
  return ar.reduce((a, b) => a + b);
}

console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));