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