//Returns the value at a specific point in the path
const getValue = (obj, path) => path
.replace(/\{([^[\]]*)]/g, '.$1.')
.split('.')
.filter(prop => prop !== '')
.reduce((prev, next) => (
    prev instanceof Object ? prev[next]
    : undefined
), obj);


console.log('GetValue: ' + getValue({ a: { b: { c: 'd'}}}, 'a.b.c')); //returns d
//getValue({ a: { b: { c: [1,2]}}}, a.b.c[1]); //returns 2 

//Ensure a value is within as specified range. If not, return the nearest min or max.
const clamp = (min, max, value) => {
    if (min > max) throw new Error('Min cannot be greater than max');
    return value < min 
    ? min 
    : value > max
        ? max
        : value
}

console.log('Clamp: ' +  clamp(0, 10, -5)); //returns 0
//clamp(0, 10, 20); //returns 10

//Count Occurrences in an array
const Occurrences  = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

console.log('Occurrences: ' + Occurrences([1, 4, 5, 5, 1, 3], 1))  // 2
//console.log(Occurrences([2, 5, 5, 6, 7, 6, 6], 6)) // 3

//Reverse a string
const ReverseString = str => [...str].reverse().join('');

console.log('ReverseString: ' + ReverseString("something")) 

// Random from list
const randomNum = array => array[Math.floor(Math.random() * array.length)];

console.log('RandomNum: ' + randomNum([5,6,10,23,1])); //23

// Minimum number from Array
const minimumNum = (arr, n = 1) => [...arr].sort((a,b) => a - b).slice(0, n);

console.log('MinimumNum: ' + minimumNum([4,3,2,1,0])) // 0

// Largest Number in array
const LargestNum = (arr, n = 1) => [...arr].sort((a,b) => b - a).slice(0,n);

console.log('LargestNum: ' + LargestNum([12,23,78]));

// Convert to array
const ConvertToArray = val => (Array.isArray(val) ? val : [val]);

console.log('ConvertToArray: ' + ConvertToArray('Big long string'));

//Merge two arrays
const arr1 = [1,3,5,7,9];
const arr2 = [2,4,6,8];
const merge = [...arr1, ...arr2];

console.log('Merged arrays: ' + merge);

//Check if null
const checkNull = val => val === undefined || val === null;

console.log('CheckNull: ' + checkNull());

//Remove duplicates from Array
const removeDups = arr => [...new Set(arr)];

console.log('Removing dupes from [2,2,2,5,1,0,2]:' + removeDups([2,2,2,5,1,0,2]));

//Empty an array
var arrEmpty = ['test','bob','henry'];
arrEmpty.length = 0;
console.log('Empty array: ' + arrEmpty);

//String to a number
let string1 = "999";
let num = Number(string1);

console.log('Changed Type: ' + typeof(num));