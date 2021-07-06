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

// Diagonal Difference
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

// Plus and Minus
function plusMinus(arr) {
  let posCounter=0;
  let negCounter=0;
  let zeroCounter=0;
  for (let i=0; i< arr.length; i++) {
    if(arr[i] > 0) {
      posCounter++;
    } else if(arr[i] < 0) {
      negCounter++;
    }else {
      zeroCounter++
    }
  }
  console.log((posCounter/arr.length).toFixed(6)) 
  console.log((negCounter/arr.length).toFixed(6))
   console.log((zeroCounter/arr.length).toFixed(6))
}
console.log(plusMinus([-4, 3, -9, 0, 4, 1]));

