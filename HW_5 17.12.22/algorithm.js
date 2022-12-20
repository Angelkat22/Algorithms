// Algorithms
// reckVnLOyThqTbqMC

// 1. Реализовать алгоритм QuickSort, когда в качестве опорного элемента (pivot) мы выбираем не последний элемент в массиве, а случайный.

//Элементы в массиве делим на две части: слева помещаем те, что меньше опорного элемента, справа те, что больше. 
//Таким образом опорный элемент занимает свое место и больше никуда не двигается.
//Для левого и правого массива действия повторяются рекурсивно.

let quickSort = function(array){ 
    function partition(array, lo, hi){
        let i = lo, j = hi + 1;
    while(true){
        while(array[++i] < array[lo]){
            if ( i == hi ) break;
        }
        while (array[ — j] > array[lo]){
            if ( j == lo ) break;
        }
            if (i >= j) break;
        array.swap(i,j);
    }
    array.swap(lo,j);
    return j;
    }
    function sort(array, lo, hi){
        if (hi <= lo) return;
        let j = partition(array, lo, hi);
        sort(array, lo, j-1);
        sort(array, j+1, hi);
    }
    sort(array, 0, array.length — 1);

    return array;
}


// 2. Дан массив строк. Нужно найти самый длинный общий префикс, используя парадигму DivideAndConquer.

// Пример, 
// arr = ["return","retard","reunion","rest"]
// prefix = "re"

// arr = ["cheer", "cheerful", "cheese"]
// prefix = "chee"

// arr = ["mirror", "nothing"]
// prefix = "" 

//Implementing
//Данная парадигма предполагает деление массива на половины ... еще половины до момента, пока части массива не будут состоять из 1 или 2 элементов, позднее - их сравнение. В данном конкретном случае мы делим весь массив лишь однажды, получая при этом изначально короткие правую и левую части.
// Итак, аллгоритм действий (pseidocode):
//array = ["return","retard","reunion","rest"];
//leftpart = ["return","retard"]
//rightpart = ["reunion","rest"]
// Проходя по каждой из половин  по отдельности циклом, мы находим общий prefix в каждой из них.

 function findCommonPrefixLeftPart (word_1, word_2){
    const minLengthBetweenWords = min (word_1.length, word_2.length)
    let i = 0;
    for (i < minLengthBetweenWords; i++) {
        const firstWordChar = word_1.charAt(i)
        const secondWordChar = word_2.charAt(i)
        if (firstWordChar !== secondWordChar) {
            break;
        }
    }
    return word_1.substring (0, i)
}

// В результате получаем - prefixOfleftpart = 'ret', prefixOfrightpart = 're'.
// Затем, рекурсивно воспользовавшись этим же циклом, находим самый длинный общий префикс от префиксов левой и правой частей.
//В результате получаем 're'.

// Первично, у меня еще промелькнула мысль изначально отсортировать массив строк в алфавитном порядке и  только потом перейти к разделению и сравнению символов.

// Сравниваю символы  первого и последнего элементов строки в массиве. Поскольку массив отсортирован, общие символы первого и последнего элементов будут общими для всех элементов массива. Если они совпадают, добавляем символ к результату.В противном случае останавливаем сравнение — результат и будет  содержать самый длинный общий префикс среди строк в массиве.






