function countApplesAndOranges(s, t, a, b, apples, oranges) {
 
  const samApples = apples.map((ele) => a + ele )
        .filter((ele) => ele>=s && ele <= t )
  const samOranges = oranges.map((ele) => b + ele )
        .filter((ele) => ele>=s && ele <= t )

        console.log(samApples.length);
        console.log(samOranges.length);

}
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);


// Sams house range 7-11
// a,b Position of first tree and second Tree
// Apples array
//Oranges array