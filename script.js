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

// const str = 'Hello'


// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }

/*
    В функцию передается массив, функция должна вернуть сумму всех нечетных чисел больше нуля
*/
// let arr = [5, 0, -5, 20, 88, 17, -32]
// let sum = null

// function getSumArr (arr) {

//     return arr.reduce((accumulator, currentValue) => currentValue % 2 && currentValue > 0 ? accumulator + currentValue : accumulator)


//     // for (let i = 0; i < arr.length; i++ ) {
//     //     if (arr[i] % 2 !== 0 && arr[i] > 0) {
//     //         sum += arr[i]
//     //     }
//     // }
//     // return sum

// }
// console.log(getSumArr(arr));

/*

    В функцию передается массив целых чисел и число r. Написать функцию, которая вернет boolean, true в случае если в переданном массиве есть два числа, сумма которых равна r, иначе false.

*/


// ********* Неправильный варинат ********* 

// function getBool (arr, r) {
//     let flag = false

//     for (let i = 0; i < arr.length; i++) {
//         if((arr[i] + arr[i + 1]) === r) {
//             flag = true
//             break
//         } else {
//             flag = false
//         }
//     }
//     return flag
// }

// console.log(getBool([5, 8, 2, 4, 5, 6, 12], 7));


// ********* Первый варинат ********* 

// function getBool (arr, r) {
//     let flag = false

    
//     for (let i = 0; i < arr.length; i++) {
        
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === r) {
//                 flag = true
//                 break
//             } else {
//                 flag = false
//             }
//         }
//         if (flag) {
//             break
//         }
//     }
   
//     return flag
// }

// console.log(getBool([5, 22, 2, 12], 2));

// ********* Второй варинат ********* 

// function getBool (arr, r) {

//     for (let i = 0; i < arr.length; i++) {
        
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === r) {
//                 return true
//             } 
//         }
        
//     }
   
//     return false
// }

// console.log(getBool([5, 22, 2, 12], 34));

/*
    В функцию передается целое положительное число. Необходимо сделать так, чтобы функция возвращала сумму всех цифр в переданном числе.

*/

// function sumNum (num) {
//     let sum = null
//     let newNum = num.toString()

//     for (let i = 0; i < newNum.length; i++) {
//         sum += Number(newNum[i])
//     }
//     return sum
// }

// console.log(sumNum(55));
// console.log(sumNum(9045));
// console.log(sumNum(3));



// function sumNum (num) {
//     let sum = 0

//     while(num > 0) {
        
//         sum += num % 10
//         num = Math.floor(num/10)

//     }

//     return sum
// }

// console.log(sumNum(55));
// console.log(sumNum(9045));
// console.log(sumNum(3));

/*
Функция func принимает массив чисел. Необходимо реализовать функцию так, чтобы она вернула количество элементов переданного массива, который отличны от наибольшего элемента не более чем на 10 %
*/

// function func (arr) {

//     let max = Math.max(...arr)
//     let num = max - (max / 10)

//     let result = arr.filter(i => i > num && i !== max)

//     return result

    // let maxValue = Math.max(...arr)
    // let num = maxValue - (maxValue / 10)
    // let newArr = []

    // for (let i = 0; i < arr.length; i++) {
    //     if(arr[i] > num && arr[i] !== maxValue) {
    //         newArr.push(arr[i])
    //     } 
    // }

    // return newArr
// }


// console.log(func([5, 88, 95, 100, 77, 21, 92]));

/*
Дана функция, в нее передается массив и целое число. Необходимо реализовать функцию так, чтобы она в массив добавляла нули до нужного размера, размер передан вторым параметром.
*/

// function fillArr (arr, len) {

//     for (let i = 0; i < arr.length; i++) {
//         if (arr.length < len) {
//             arr.push(0)
//         }
//     }

// }

// const arr = [2, 6, 8]
// fillArr(arr, 8)
// console.log(arr);

/*
Рeализовать функцию uique, в которую передается массив с числами, а функция возвращает массив, очищенный от дублей
*/

// function unique (arr) {

//     //Быстрый способ

//     return Array.from(new Set(arr))

//     //Рабочий способ
//     // for (let i = 0; i < arr.length; i++) {
//     //     for (let j = i + 1; j < arr.length; j++) {
//     //         if (arr[i] === arr[j]) {
//     //             arr.splice(j, 1)
//     //         }
//     //     }
//     // }
//     // return arr
// }

// console.log(unique([1, 8, 1, 5, 9, 5, 8]));


/*
Реализовать функцию round5, которой передается целое число, функция должна возващать ближайшее целое число к тому что было передано, без остатка делящееся на 5
*/

// function round5 (val) {
//    return Math.round(val/5)*5
// }

// console.log(round5(0));
// console.log(round5(2));
// console.log(round5(5));
// console.log(round5(11));
// console.log(round5(14));

/*
Необходимо реализовать функцию uniquePoints, функция принимает массив с объектами, в которых записаны точки на осях координат. Необходимо сделать так, чтобы из функции возвращался массив, очищенный от дублей точек.
*/
// function uniquePoints(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if(arr[i].x === arr[j].x || arr[i].y === arr[j].y) {
//                 arr.splice(j, 1)
//             }
//         }
//     }
//     return arr
// }

// const arr = [
//     {x: 5, y: 10},
//     {x: 1, y: 15},
//     {x: 7, y: -5},
//     {x: 16, y: 33},
//     {x: 4, y: 15},
//     {x: 44, y: -5},
//     {x: 4, y: 12},
// ]

// console.log(uniquePoints(arr));


/*
Необходимо перебрать массив с конца в начало и вывести в консоль сообщение вида:
'Под свойством 5 лежит значение 35'
*/

// const arr = [51, 8, 99, 71, 2, 35]

// function revArr (arr) {
//    arr.reverse()
//    let message = ''
//    for (let i = 0; i < arr.length; i++) {
//         message = `Под свойством ${i} лежит значение ${arr[i]}`
//         console.log(message);
//    }

// }
// revArr(arr);

//Второй способ

// const arr = [51, 8, 99, 71, 2, 35]

// function rev (arr) {
//     let newArr = []
//     for(let i = 1; i < arr.length + 1; i++) {
//         newArr.push(arr[arr.length - i])
        
//     }
//     for (let j = 0; j < newArr.length; j++) {
//         console.log(`Под свойством ${j} лежит значение ${newArr[j]}`);
//     }
// }
// rev(arr);

// Третий способ

// const arr = [51, 8, 99, 71, 2, 35, 71, 2, 35]

// let reverseArr = arr.reverse()

// reverseArr.forEach((elem, item) => {
//     console.log(`Под свойством ${item} лежит значение ${elem}`);
// });


//
// const arr = [51, 8, 99, 71, 2, 35]

// for(let i = arr.length - 1; i >= 0; i--) {
//     console.log(`Под свойством ${i} лежит значение ${arr[i]}`);
// }

/*
Функция getArr принимает целое положительное число, необходимо реализовать функцию так, чтобы она возвращала массив, в котором будут записаны числа в убывающем порядке, которые кратны 3, до нуля включительно
*/

// function getArr(num) {
//     let arr = []
    
//     // while (num >= 0) {
//     //     if (num % 3 === 0) {
            
//     //     }
//     //     num--
//     // }

//     for (num; num >= 0; num--) num % 3 === 0 ? arr.push(num): num--
    
//     return arr

// }

// console.log(getArr(15));
// console.log(getArr(17));
// console.log(getArr(22));

/*
Функция getEvenElementSum принимает массив с целыми числами, необходимо реализовать функцию так, чтобы она возвращала сумму чисел массива, которые записаны в четных индексах включая 0.
*/

// function getEvenElementSum(arr) {
//     let sum = null

//     arr.forEach((el, item) => {
//         if (item % 2 === 0) {
//             sum += el
//         }
//     });


//     return sum
// }

// console.log(getEvenElementSum([5, 7, -1, 12, 3, 0]));
// console.log(getEvenElementSum([4, -12, 29, 6, 31, 2, -50]));


// function getEvenElementSum(arr) {
    
//    return arr.reduce((accum, elem, id) => {
//        if (id % 2 === 0) {
//             accum += elem
//        }
//        return accum
//     })

// }

// console.log(getEvenElementSum([5, 7, -1, 12, 3, 0]));
// console.log(getEvenElementSum([4, -12, 29, 6, 31, 2, -50]));

/*
Написать функцию, которая принимает три числа 'a, b, c', функция должна вернуть массив чисел, которые лежат в промежутке между числами 'a' включительно и 'b' включительно делящиеся без остатка на число 'c'
*/

// function filter(a, b, c) {
//     let arr = []
//     let x = Math.max(a,b)
//     let y = Math.min(a,b)

//     for (y; y <= x; y++) {
//         if(y % c === 0) {
//             arr.push(y)
//         }
//     }
//     return arr

    // while (a > b) {
    //     if (a % c === 0) {
    //         arr.push(a)
           
    //     } 
    //     a--
    // }
    // while (a < b) {
    //     if (a % c === 0) {
    //         arr.push(a)
           
    //     }
    //     a++
//     // }
//     return arr
// }

// console.log(filter(32, 15, 3));


/*
Вывести в консоль все числа  меньше миллиона, которык являются паллиндромами по основаниям 10 и 2
*/

// let num = 1_000_000

// function isPalindrom(num) {
//     let newNum
//     let reverseNum
//     for (num; num >= 11; num--) {
//         newNum = num.toString(10)
//         reverseNum = newNum.split('').reverse().join('')

//         if (reverseNum === newNum) {
//             console.log(Number(reverseNum));
//         }
//     }
// }

// isPalindrom(num)
// Правильный вариант
// let num = 10000

// function isPalindrom(num) {
//     for (num; num >= 11; num--) {
//         let newNum = num.toString()
//         let reverseNum = newNum.split('').reverse().join('')

//         let newNumTwo = num.toString(2)
//         let reverseNumTwo = newNumTwo.split('').reverse().join('')

//         if (reverseNum === newNum && reverseNumTwo === newNumTwo) {
//             console.log(+reverseNum);
//         }
//     }
// }

// isPalindrom(num)

/*
Написать функцию в которую будет передаваться строка, функция должна вернуть булев тип, который описывает, является ли переданная строка в функции палиндромом
*/

// function itPalindrom(str) {
//  //let reverseStr = str.split('').reverse().join('')
//    let reverseStr = str.toLowerCase().split('').reverse().join('')
//    return reverseStr === str.toLowerCase() ? true : false
// }

// function itPalindrom(str) {
//       return str.toLowerCase() === str.toLowerCase().split('').reverse().join('')
//    }

// console.log(itPalindrom('hello'));
// console.log(itPalindrom('Heeeeh'));


/*
В функцию передается строка, содержащая английские буквы, функция должна вернуть массив, содержащий все возможные комбинации букв.
*/

function getLettersVariants(str) {
    if (str.length === 1) {
        return [str]
    }

    let arrStr = str.split('')

    for (let i = 0; i < arrStr.length; i++) {
        
    }
}
console.log(getLettersVariants('ssdda'));