'use strict'

const ifPalindrome = (num) => {
   const newInt = parseInt(num.toString().split('').reverse().join(''));
   return ( num === newInt ) ? true :  false;
}

const findNextPalindrome = (num) => {
   let newNum = num + 1;
   while( !ifPalindrome(newNum) ) {
      newNum++;
   }
   return newNum;
}

console.log(findNextPalindrome(808));
console.log(findNextPalindrome(999));
console.log(findNextPalindrome(2133));
