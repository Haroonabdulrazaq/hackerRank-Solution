function gradingStudents(grades) {
 let myArr=[];
  grades.map(ele => {
    let remainder = ele%5;
    let roundValue = 5 - remainder
    if(roundValue < 3 && ele > 37) {
      ele += roundValue;
      myArr.push(ele);
    } else {
      myArr.push(ele);
    }
  })
  return myArr;
}

console.log(gradingStudents([48,19,13,175]));

// Get the multiple of 5 using modulo
// Subtract the remainder from what you got
// If it is less than 3 round up
// else round down