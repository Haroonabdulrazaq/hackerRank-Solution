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
    if (first < 12) {
      first = first.toString().padStart(2, '0');
    }
    return [first, strArr[1],last].join(':');
  }
}

console.log(timeConversion("06:40:03AM"));