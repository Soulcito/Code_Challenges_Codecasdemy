'use strict'

// Find the next palindrome

// A palindrome is a whole number that is the same when read backwards and forwards, for example: 12321, 141 or 10001. The challenge is to write a program (in a language of your choice) that will return the next palindrome for a given integer.

// For example:
// nextPalindrome(808) // 818
// nextPalindrome(999) // 1001
// nextPalindrome(2133) // 2222


// Note: Try to make a solution that is more efficient than incrementing and checking each subsequent number to see if it's a palindrome. While this would technically work, it would perform rather slowly for very large inputs.


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
