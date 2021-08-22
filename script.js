"use strict";
/* 
    №1
    Если выписать все натуральные числа меньше 10, кратные 3 или 5, то получим 3, 5, 6 и 9. Сумма этих чисел равна 23.
    Найдите сумму всех чисел меньше 1000, кратных 3 или 5.
*/


// let num = +prompt('Введите число: ', '1000')
// let sum = null

// for (let i = 1; i < num; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         sum += i
//     }
// }

// alert(`Сумма всех чисел меньше ${num}, кратных 3 или 5 равна: ${sum}`)


/* 
    №2
    Каждый следующий элемент ряда Фибоначчи получается при сложении двух предыдущих. Начиная с 1 и 2, первые 10 элементов будут:
    1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
    Найдите сумму всех четных элементов ряда Фибоначчи, которые не превышают четыре миллиона.
*/

// let [a, b] = [1, 2]

// let arr = []
// let sum = null

// while (a < 4_000_000) {
//     arr.push(a)
//     c = a + b
//     a = b
//     b = c
// }

// for (const i in arr) {
//     if (arr[i] % 2 === 0 && arr[i] < 4_000_000) {
//         sum += arr[i] 
//     }
// }

// console.log(sum);

/* 
    №3
    Простые делители числа 13195 - это 5, 7, 13 и 29.
    Каков самый большой делитель числа 600851475143, являющийся простым числом?
*/

// let num = 600851475143


// for (let i = 2; i != 0; i++) {
//     if (num % i === 0) {
//         num = num / i
//         if (num === 1) {
//             console.log(i);
//             break;
//         }
//     }
// }


/*

    Напишите функцию, в которую передается целое число. Функция должна вывести горку как показано в примере с тем числом линий, которое было передано в параметр функции.

    Пример:

    #
    ##
    ###
    ####
    #####
    ######

*/

// Первое решение

// let symbol = '#'
// let arr = []

// function printHill (lines) {
//     for (let i = 1; i <= lines; i++ ) {
//         arr.push(symbol)
//         console.log(arr.join(""));
//     }
// }

// printHill(5)

// Второе решение

// function printHill (lines) {
//     for (let i = 1; i <= lines; i++ ) {
//        console.log('#'.repeat(i));
//     }
// }

// printHill(5)

/*
 
    В функцию передается массив, функция должна вернуть новый массив с четными числами.

*/

// function getEven (arr) {
    
//     let newArr = []

//     for (const i in arr) {
//        if (arr[i] % 2 === 0) {
//            newArr.push(arr[i])
//        }
//     }
//     return newArr
// }

// console.log(getEven([5, 0, -5, 20, 88, 17, -32]));

//Второй вариант через filter

// function getEven (arr) {
//     return arr.filter(val => !(val % 2))
// }

// console.log(getEven([5, 0, -5, 20, 88, 17, -32]));

/*

    Написать функцию isIntersect, которая принимает 2 объекта, содержащие свойства:
    x - величина центра круга по оси x
    y - величина центра круга по оси y
    r - радиус окружности

    Функция isIntersect должна вернуть true в случае если два круга имеют хоть одну общую точку по окружности, false - если окружности не пересекаются.

*/

// function isIntersect (a, b) {
//   let x = Math.abs(a.x - b.x)
//   let y = Math.abs(a.y - b.y)
//   let o = (x**2 + x**2)**0.5
//   let r = a.r + b.r

//   if (r < o) {
//       return false;
//   } else if (Math.abs(a.r - b.r) > o) {
//       return false;
//   }
//   return true;
// }

// console.log(isIntersect({x: 0, y: 0, r: 2}, {x: 5, y: 5, r: 1}));
// console.log(isIntersect({x: 0, y: 0, r: 2}, {x: 2, y: 2, r: 1}));
// console.log(isIntersect({x: 0, y: 0, r: 2}, {x: 0, y: 1, r: 1}));


/*
    Выполнить сортировку
*/

// function sort(arr) {
//    for (let i = 1; i <= arr.length; i++) {
//        if(arr[i] < arr[i - 1]) {
//             arr.splice(i, 1)
//             i--
//        } 
//    }
//   return arr
// }

// const arr = [5, 18, 2, -7, 88, 20, 109]


// console.log(sort(arr));