let number = + prompt("enter number 1");
let number2 = + prompt("enter number 2");
let number3 = + prompt("enter number 3");

const mynum = [];

mynum.push(number,number2,number3);

alert(mynum.sort(function(a, b) {
    return b - a;
  }));

/* =================================================================================== */

//อีกวิธี if

//version 1
let max;
let mid;
let min;


/* if (number > number2 && number > number2) {
  console.log(`max ${number}`);
} else if(number2 > number && number2 > number3){
  console.log(`max ${number2}`);
} else if(number3 > number && number3 > number2){
  console.log(`max ${number3}`);
} */

//version 2

if (number >= number2 && number >= number2) {

  max = number;
  if (number2 > number3) {
    mid = number2;
    min = number3;
  }
  else{
    mid = number3;
    min = number2;
  }
} else if(number2 > number && number2 > number3){
  max = number2;
  if (number > number3) {
    mid = number;
    min = number3;
  }
  else{
    mid = number3;
    min = number;
  }
} else if(number3 > number && number3 > number2){
  max = number3;
  if (number > number2){
    mid = number;
    min = number2;
  }
  else{
    mid = number2;
    min = number;
  }
}

console.log(`max: ${max} mid: ${mid} min: ${min}`);