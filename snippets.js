//Returns the value at a specific point in the path
const getValue = (obj, path) => path
.replace(\/{([^[\]]*)]/g, '.$1.')
.split('.')
.filter(prop => prop !== '')
.reduce((prev, next) => (
    prev instanceof Object ? prev[next]
    : undefined
), obj);


//getValue({ a: { b: { c: 'd'}}}, 'a.b.c'); //returns d
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

//clamp(0, 10, -5); //returns 0
//clamp(0, 10, 20); //returns 10

//Count Occurrences in an array
const Occurrences  = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

//console.log(Occurrences([1, 4, 5, 5, 1, 3], 1))  // 2
//console.log(Occurrences([2, 5, 5, 6, 7, 6, 6], 6)) // 3

