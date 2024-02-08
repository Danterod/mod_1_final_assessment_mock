// Sample Module 1 Assessment:

// 1. Given a string of two words, both made of only lowercase letters, write a function that returns the same string, with the first letter of each word capitalized

// 'mickey mouse' => 'Mickey Mouse'
// 'kiera gonzalez' => 'Kiera Gonzalez'

function firstLetterOfEachWord(string) {
    for (let str of string) {
        if(string[0]) {
            string.toUpperCase()
        } else if (string.length - 1) {
            string.toUpperCase()
        }
    }
    return string
}
console.log(firstLetterOfEachWord('mickey mouse', 'kiera gonzalez'));

// 2. Write a function that takes an array of lowercase words, return the words that have one or more 'e' but do not start with 'e'.

// ["ellen", "jane", "zigland", "pedestrian"] => ["jane", "pedestrian"]

// ['red', 'lindsay', 'equine', 'drip'] => ['red'] 

function wordsWithE(arr) {
    let arr1 = [];
     for (let i = 0; i < arr.length; i++) {
if (arr[0] === 'e') {

}
    }
    return arr1;
 }
console.log(wordsWithE(["ellen", "jane", "zigland", "pedestrian"]));
// 3. Write a function that takes a string of lowercase letters, and returns an object with a count of how many times each letter appears

// 'asciiaske' => {
//   'a' : 2, 
//   's' : 2,
//   'c' : 1,
//   'i' : 2,
//   'k' : 1, 
//   'e' : 1
// }

// 


function countLetterAppearances(str) {
    let obj = {};
    let countChar = 0
    for (let i = 0; i < str.length; i++) {
str.toSplit + str[countChar];
    }
    return obj;
}
console.log(countLetterAppearances('asciiaske'))