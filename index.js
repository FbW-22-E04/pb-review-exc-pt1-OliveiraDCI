console.clear();

//
console.log("\n------------------ // 1");
// ### CHALLENGE 1: REVERSE A STRING
const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString("hello"));

//
console.log("\n------------------ // 2");
// #### CHALLENGE 2: VALIDATE A PALINDROME
const isPalindrome = (str) =>
  str === str.split("").reverse().join("") ? true : false;
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));

//
console.log("\n------------------ // 3");
// ### CHALLENGE 3: REVERSE AN INTEGER
const reverseInt = (num) => Number(num.toString().split("").reverse().join(""));
console.log(reverseInt(521));

//
console.log("\n------------------ // 4");
// ### CHALLENGE 4: CAPITALIZE LETTERS
const capitalizeLetters = (str) =>
  str
    .split(" ")
    .map((el) => el[0].toUpperCase().concat(el.slice(1)))
    .join(" ")
    .concat(" 💟");
console.log(capitalizeLetters("i love javascript"));

//
console.log("\n------------------ // 5");
// ### CHALLENGE 5: MAX CHARACTER
const maxCharacter = (str) => {
  const { max, ...counts } = (str || "").split("").reduce(
    (acc, el) => {
      acc[el] = acc[el] ? acc[el] + 1 : 1;
      acc.max = acc.max < acc[el] ? acc[el] : acc.max;
      return acc;
    },
    { max: 0 }
  );
  let result = Object.entries(counts).filter(([key, value]) => value === max);
  return `${result.flat()[1]} times the character '${result.flat()[0]}'`;
};
console.log(maxCharacter("javascript "));

//
console.log("\n------------------ // 6");
// ### CHALLENGE 6: FIZZBUZZ
const fizzBuzz = function () {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
      continue;
    }
    if (i % 3 === 0) {
      console.log("Fizz");
      continue;
    }
    if (i % 5 === 0) {
      console.log("Buzz");
      continue;
    }
    console.log(i);
  }
};
fizzBuzz();

//
console.log("\n------------------ // 7");
// ### CHALLENGE 7: LONGEST WORD
const longestWord = (str) => {
  let wordsArr = str.split(" ");
  let resultArr = [];
  let longest = "";
  wordsArr.map((word) => {
    if (word.length > longest.length) {
      longest = word;
      return;
    }
    if (word.length === longest.length) {
      resultArr.push(longest, word);
      return;
    }
  });
  return resultArr.length > 0
    ? resultArr.length === 1
      ? resultArr.join("")
      : new Set(resultArr)
    : longest;
};
console.log(longestWord("Hi there, my name is Brad"));
console.log(longestWord("My name is Brad"));
console.log(longestWord("Brad"));

//
console.log("\n------------------ // 8");
// ### CHALLENGE 8: ARRAY CHUNKING
// // Split an array into chunked arrays of a specific length
// // ex:
// chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3], [4, 5, 6], [7]];
// chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2], [3, 4], [5, 6], [7]];
const chunkArray = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (el, i) =>
    arr.slice(i * size, i * size + size)
  );

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3)); // [[1, 2, 3], [4, 5, 6], [7]];
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2)); // [[1, 2], [3, 4], [5, 6], [7]];

//
console.log("\n------------------ // 9");
// ### CHALLENGE 9: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex:
// [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
console.log([[1, 2], [3, 4], [5, 6], [7]].flat()); //  = [1, 2, 3, 4, 5, 6, 7]
//
console.log("\n------------------ // 10");
// ### CHALLENGE 10: ANAGRAM
// Return true if anagram and false if not
// ex. isAnagram('elbow', 'below') === true
// ex. isAnagram('Dormitory', ''dirty room##'') --> false

const isAnagram = (str1, str2) =>
  str1.split("").sort().toString() === str2.split("").sort().toString()
    ? true
    : false;
console.log(isAnagram("elbow", "below")); // true
console.log(isAnagram("Dormitory", "dirty room##")); // false

//
console.log("\n------------------ // 11");
// ### CHALLENGE 11: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers
// ex:
// addAll(2, 5, 6, 7) === 20;

const addAll = (...numbers) => numbers.reduce((acc, el) => acc + el, 0);
console.log(addAll(2, 5, 6, 7)); // 20;

//
console.log("\n------------------ // 12");
// ### CHALLENGE 12: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex.
// sumAllPrimes(10) === 17;

const sumAllPrimes = (n) => {
  let counter = 0;

  for (let i = 2; i <= n; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        flag = 1;
        break;
      }
    }

    if (i > 1 && flag == 0) counter += i;
  }

  return counter;
};
console.log(sumAllPrimes(10)); // 17

//
console.log("\n------------------ // 13");
// ### CHALLENGE 13: SEEK AND DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex:
// seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello'];

const seekAndDestroy = (arr, ...args) => arr.filter((el) => !args.includes(el));
console.log(seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6)); // [3, 4, "hello"];

//
console.log("\n------------------ // 14");
// ### CHALLENGE 14: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex:
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116];

const evenOddSums = (arr) => {
  let evens = [];
  let odds = [];
  arr.forEach((el) => (el % 2 === 0 ? evens.push(el) : odds.push(el)));
  let evensSum = evens.reduce((acc, el) => acc + el, 0);
  let oddsSum = odds.reduce((acc, el) => acc + el, 0);
  return [evensSum, oddsSum];
};
console.log(evenOddSums([50, 60, 60, 45, 71])); // [170, 116];
//
console.log("\n------------------ ");
