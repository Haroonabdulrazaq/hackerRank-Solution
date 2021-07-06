function birthdayCakeCandles(candles) {
  const max = Math.max(...candles);
  const result = candles.filter((ele) => ele == max);
  return result.length;
}


console.log(birthdayCakeCandles([3, 3,2, 1, 3]));