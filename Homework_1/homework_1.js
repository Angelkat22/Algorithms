//  Given an array arr[] of N elements, the challenge is to write a function to find a given element x in arr[] .

function LinearSearch(arr, key) { 
    for (i = 0; i < arr.length; i++) { 
    if (arr[i] == key) { 
        return i; 
        }
    } 
        return -1; 
} 


//Example:
//LinearSeach (arr = [1,2,3,4,5], key = 4)
//1.iteration:
//1 (arr[0] === 4) => false
//2.iteration:
//2 (arr[1] === 4) => false
//3.iteration:
//3 (arr[2] === 4) => false
//4.iteration:
//4 (arr[3] === 4) => true

// space complexity O(1) 
// time complexity O(n)

//2. Find the element that appears once in a sorted array. Given a sorted array in which all elements occur twice (one after the other) and one element appears only once.

function findElement(arr) {
    let size = arr.length;

    for (i = 0; i < size; i += 2) {
        if (arr[i] != arr[i + 1]) {
            return arr[i]
            }
        if (arr[i] != arr[i - 1]) {
            return arr[i]
            }
        }
        return -1;
    }

//Example:
//LinearSeach (arr = [1,1,2,2,3,3,7])
//1.iteration:
//1 (arr[0] != arr[1]) => -1
//2.iteration:
//2 (arr[2] != arr[3]) => -1
//3.iteration:
//3 (arr[4] != arr[5]) => -1
//4.iteration:
//4 (arr[6]) != arr[5] => arr[6]



// space complexity O(1) 
// time complexity O(n)

//3. Optional task
// implement in js two algorithms how to revert an integer array 

let arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr);

// Time complexity: O(n).
// Space complexity: O(1).

let reverseArray = (arr) => {
    let temp = []; //Temporary array

    for(let i = 0; i < arr.length; i++){
        temp[i] = arr[arr.length - i - 1];
    }
    return temp;
}

console.log(reverseArray([1, 2, 3, 4, 5]));

// Time complexity: O(n).
// Space complexity: O(n).


