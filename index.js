function staircase(n) {
  let count = n;
  count -= 1
  for(let i = 1 ; i <= n; i++) {
    console.log("#".repeat(i).padStart(n))
  }

}
staircase(6);