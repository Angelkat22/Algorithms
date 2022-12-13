// First level: 1. Даны два целых числа x и n, напишите функцию для вычисления x^n решение 1 - рекурсивно O(n)
//x*x n times
//Example:
//x=4 n=8 => 4^8 = 4*4*4*4*4*4*4*4
// 4*4*4*4*4*4*4*4

//IMPLEMENTATION

let pow(double a, int n) {
    if (n == 0) {
        return 1;
    }
    return pow(a, n-1)*a;
}


//решение 2 - улучшить решение 1 до O(log n)

//IMPLEMENTATION

let pow (x, n){
    if(n==o){
        return 1;
    }
    let result = pow(x, n/2){ 
    if (n % 2 ==0) {
        return result*result;
    } else {
        return result*result*x;
        }
    }
}

// 2.	Имея два отсортированных массива размера m и n соответственно, вам нужно найти элемент, который будет находиться на k-й позиции в конечном отсортированном массиве. Массив 1 - 100 112 256 349 770 
//Массив 2 - 72 86 113 119 265 445 892 к = 7 Вывод : 256 

//Окончательный отсортированный массив - 72, 86, 100, 112, 113, 119, 256, 265, 349, 445, 770, 892 7-й элемент этого массива равен 256.

//IMPLEMENTATION

//arrayA = [100, 112, 256, 349, 770];
//arrayB = [72, 86, 113, 119, 265, 445, 892]

//1. Merge two sorted arrays
// Merge ([100, 112, 256, 349, 770], [72, 86, 113, 119, 265, 445, 892])
// Compare: 

// Step 1: if 100 > 72, that means, that 72 is minElement and goes in sortedArray => [72, ..], do step 2.

//Step 2: if 100 > 86, that means, that 86  is next one in sortedArray =>
//[72, 86..], do step 3.

//Step 3: if 100 < 113, that means, that 100  goes in sortedArray =>
//[72, 86, 100..], do step 4.

//Step 4: if 112 < 113, that means, that 112  goes in sortedArray =>
//[72, 86, 100, 112..], do step 5.

//Step 5: if 256 > 113, that means, that 113  goes in sortedArray =>
//[72, 86, 100, 112, 113..], do step 6.

//Step 6: if 256 > 119, that means, that 119  goes in sortedArray =>
//[72, 86, 100, 112, 113, 119..], do step 7.

//Step 7: if 256 < 265, that means, that 256  goes in sortedArray =>
//[72, 86, 100, 112, 113, 119, 256..], do step 8.

//Step 8: if 349 > 265, that means, that 265  goes in sortedArray =>
//[72, 86, 100, 112, 113, 119, 256, 265..], do step 9.

//Step 9: if 349 < 445 that means, that 349  goes in sortedArray =>
//[72, 86, 100, 112, 113, 119, 256, 265, 349..], do step 10.

//Step 10: if 770 > 445 that means, that 445  goes in sortedArray =>
//[72, 86, 100, 112, 113, 119, 256, 265, 349, 445..], do step 11.

//Step 11: if 770 < 892 that means, that 770  goes in sortedArray =>
//[72, 86, 100, 112, 113, 119, 256, 265, 349, 445, 770..] and 892 is the last elemnt. 
//That means sortedArray = [72, 86, 100, 112, 113, 119, 256, 265, 349, 445, 770, 892].

function mergeSortedArrays(sortedArrayA, sortedArrayB){
    const result = [];
    for (i = 0, i< sortedArrayA.lenght && j< sortedArrayB.lenght){
        if (sortedArrayA[i]<= sortedArrayB[j]){
            result.push (sortedArrayA[i])
            i++
        } else {
            result.push(sortedArrayB[j]
                j++)
        }
    }
    return result;
}

//2. SortedArray  [72, 86, 100, 112, 113, 119, 256, 265, 349, 445, 770, 892]
// Find k=7, but key = 6 // 7.position is sortedArray[6].

//IMPLEMENTATION

function binarySeach(sortedArray, key){
    const midIndex = sortedArray.lenght/2;
    const midElement = sortedArray[midIndex];
    if ( key === midElement){
        return midIndex;
    } else
    if (key > midElement){
        binarySeach(sortedArray.slice (midIndex + 1, sortedArray.lenght), key)
    } else {
        binarySeach (sortedArray.slice (0, midIndex), key)
    }
}


// 3.Имея отсортированный массив arr[] и число x, напишите функцию, которая подсчитывает вхождения x в arr[]. Ожидаемая временная сложность O(Log n) 
//arr[] = {1, 1, 2, 2, 2, 2, 3,} x = 2 Вывод: 4 раза

//IMPLEMENTATION

function countIns (sortedArray){
    let count = 0;
    for (let i = 0; i < sortedArray.lenght; i++){
        if (sortedArray[i] === x) 
        count++;
    }
    return count;
}
