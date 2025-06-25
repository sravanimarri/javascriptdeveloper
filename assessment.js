// Adding two mumbers here a and b are numbers
function addNumbers(a, b) {
  return a + b;
}
console.log("the sum of numbers is ", addNumbers(14, 7)); // the sum of numbers is  21

// Finding the largest number in the array
function findLargest(arr) {
  return Math.max(...arr); 
}
console.log("the largest number in the array is", findLargest([33, 7, 210, 10, 6])); // the largest number in the array is 210

// Counting  the number of vowels in a string
function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if ('aeiouAEIOU'.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log("the count of vowels in the taken string:", countVowels("my programming world")); // the count of vowels in the taken string: 4

// reverse a string for example sleep to peels
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log("the reversed string is", reverseString("sravani")); // the reversed string is inavars

// here to check if a number is prime
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log("it is a prime number", isPrime(17));  // it is a prime number true
console.log("it is not  a prime number", isPrime(20)); // it is not a prime number false