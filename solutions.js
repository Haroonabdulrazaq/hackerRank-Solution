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

//StairCase Problem
function staircase(n) {
  let count = n;
  count -= 1
  for(let i = 1 ; i <= n; i++) {
    console.log("#".repeat(i).padStart(n))
  }

}
staircase(6);

// MinMax Problem
function miniMaxSum(arr) {
  // Write your code here
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const result = arr.reduce((a,b) =>  a+b);
  console.log((result - max), (result - min));
}
console.log(miniMaxSum([1,2,3,4,5]))


// BirthDay Caskes Candle
function birthdayCakeCandles(candles) {
  const max = Math.max(...candles);
  const result = candles.filter((ele) => ele == max);
  return result.length;
}


console.log(birthdayCakeCandles([3, 3,2, 1, 3]));

// Time Conversion
function timeConversion(s) {
  const strArr = s.split(':');
  const lastele = strArr.splice(-1, 1);
 
  const firstnum = lastele[0].split('')[0];
  const secondnum = lastele[0].split('')[1];
  const thirdnum = lastele[0].split('')[2];
  const forthnum = lastele[0].split('')[3];
 
 const meridian = [thirdnum, forthnum].join('');
 const last = [firstnum, secondnum].join('');
 let first = Number(strArr[0]);
 
   if(meridian ==='PM') {
     if( first < 12 ) {
       first = first + 12;
     }
     return [first, strArr[1],last].join(':');
   } else {
     if( first == 12 ) {
       first = first - 12;
       first = first.toString().padStart(2, '0');
     }
     if (first < 10) {
       first = first.toString().padStart(2, '0');
     }
     return [first, strArr[1],last].join(':');
   }
 }
 
 console.log(timeConversion("06:40:03AM"));