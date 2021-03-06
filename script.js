'use strict';
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

// function getLettersVariants(str) {
//     if (str.length === 1) {
//         return [str]
//     }

//     const arr = new Set()

//     for (let i = 0; i < str.length; i++) {
//         const variants = getLettersVariants(str.slice(0, i) + str.slice(i + 1))
//         for (const variant of variants) {
//             arr.add(str[i] + variant)

//         }
//     }
//     return arr
// }
// console.log(getLettersVariants('asd'));

/*
 Функция getEventElement принимает массив с целыми числами, необходимо реализовать функцию так, чтобы она возвращала значение большего элемента массива, который записан в четном индексе включая 0
*/

// function getEventElement(arr) {
//     let newArr = []

//     for (let i = 0; i < arr.length; i++) {
//         i % 2 === 0 ? newArr.push(arr[i]) : false
//     }

//     return Math.max(...newArr)

// }

// console.log(getEventElement([5, 7, -1, 12, 3, 0]));
// console.log(getEventElement([4, -12, 29, 6, 31, 92, -50]));

/*
Необходимо создать функцию encode, которая будет принимать строку с буквами на английском языке, необходимо сделать так чтобы из функции возвращалась строка, в которой гласные буквы были заменены на цифры

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5

Также необходимо создать функцию decode, которая принимает зашифрованную строку и возвращает востановленную.
*/

// function encode(str) {
//     const arr = ['a', 'e', 'i', 'o', 'u']
//     return str.split('').map(elem => {
//         let index = arr.indexOf(elem)
//         return index !== -1 ? index + 1 : elem
//     }).join('')
// }

// function decode(str) {
//     const arr = {1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u'}
//     return str.split('').map(elem => {
//         return isNaN(elem) ? elem : arr[elem]
//     }).join('')
// }

// console.log(encode('hello'));
// console.log(decode(encode('hello')));

// function encode (str) {
//     let newStr = str.split('')
//     for(let i = 0; i < newStr.length; i++) {
//         switch (newStr[i]) {
//             case 'a':
//                 newStr[i] = 1
//                 break;
//             case 'e':
//                 newStr[i] = 2
//                 break;
//             case 'i':
//                 newStr[i] = 3
//                 break;
//             case 'o':
//                 newStr[i] = 4
//                 break;
//             case 'u':
//                 newStr[i] = 5
//                 break;
//         }
//     }
//     return newStr.join('')
// }

// function decode (str) {
//     let newStr = str.split('')
//     for(let i = 0; i < newStr.length; i++) {
//         switch (newStr[i]) {
//             case '1':
//                 newStr[i] = 'a'
//                 break;
//             case '2':
//                 newStr[i] = 'e'
//                 break;
//             case '3':
//                 newStr[i] = 'i'
//                 break;
//             case '4':
//                 newStr[i] = 'o'
//                 break;
//             case '5':
//                 newStr[i] = 'u'
//                 break;
//         }
//     }
//     return newStr.join('')
// }

// console.log(encode('hello'));

// console.log(decode(encode('hello')));

/*
Напишите программу, которая выводит на экран числа от 1 до 100. При этои вместо чисел, кратных трем, программа должна выводить слово "Fizz", а вместо чисел кратных пяти - слово "Buzz". Если число кратно и 3 и 5, то программа должна выводить слово "FizzBuzz"
*/

// function exNum () {
//     for(let i = 1; i <= 100; i++) {
//         if (i % 3 === 0) {
//             console.log('Fizz');
//         } else if (i % 5 === 0) {
//             console.log('Buzz');
//         } else if (i % 3 === 0 && i % 5 === 0) {
//             console.log('FizzBuzz');
//         } else {
//             console.log(i);
//         }
//     }
// }
// exNum ();

/*
Реализовать функцию, которая будет работать при любом колличестве вызовов верно. Внутрь функции всегда передается число, проверять не нужно.
*/

// function add(n) {
//     if(n === undefined) return 0
//     let sum = n
//     return function recursive(num) {
//         if(num === undefined) return sum
//         sum += num
//         return recursive;
//     }

// }

// // console.log(add());
// console.log(add(2)());
// console.log(add(2)(3)());
// console.log(add(5)(-1)(2)());

/*
В функцию sumAge передается структура, в которой описан человек и его дети. Необходимо реализовать функцию sumAge так, чтобы она возвращала сумму человека и всех его детей.
*/

// function sumAge(user) {

//     let sum = 0
//     if (user?.age) sum += user.age

//     if(user?.children) {
//        for(let i = 0; i < user.children.length; i++) {
//            sum += user.children[i].age;
//            if(user.children[i]?.children) {
//                for(let j = 0; j < user.children[i].children.length; j++) {
//                 sum += user.children[i].children[j].age;
//                }
//            }
//        }
//     }

//     return sum

// }

// Рекурсивный вариант
// function sumAge(user) {

//     let sum = user.age

//     if(user?.children) {
//         for (let i = 0; i < user.children.length; i++) {
//             if(user.children[i]?.children) {
//                 sum += sumAge(user.children[i])
//             } else {
//                 sum += user.children[i].age
//             }
//         }
//     }

//     return sum

// }

// function sumAge(user) {

//     return user.children.reduce((accum, elem) => elem.children ? accum + sumAge(elem) : accum + elem.age, user.age)

// }

// const user = {
//     name: 'Петр',
//     age: 49,
//     children: [
//         {
//             name: 'Нина',
//             age: 25,
//             children: [
//                 {
//                     name: 'Андрей',
//                     age: 3,
//                     children: [
//                         {
//                             name: 'Андрей',
//                             age: 22
//                         },
//                         {
//                             name: 'Олег',
//                             age: 1
//                         },
//                     ]
//                 },
//                 {
//                     name: 'Олег',
//                     age: 1
//                 },
//             ]
//         },
//         {
//             name: 'Александр',
//             age: 22
//         },
//     ]
// }

// console.log(sumAge(user));

// function sequence(start = 0, step = 1) {
//     let result = start
//     return function() {
//         result =+ step

//         return result
//     }

// }

// const generator1 = sequence(10, 3)
// const generator2 = sequence(7, 1)

// console.log(generator1());
// console.log(generator1());
// console.log(generator2());
// console.log(generator1());
// console.log(generator2());

// function filter(arr, fun) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//             if (fun(arr[i])) {
//                 newArr.push(arr[i])
//             }
//     }
//     return newArr
// }

// console.log(filter([1, 3, 2, 4], n => n < 3));

/*
    №4
Число-палиндром с обеих сторон (справа налево и слева направо) читается одинаково. Самое большое число-палиндром, полученное умножением двух двузначных чисел – 9009 = 91 × 99.

Найдите самый большой палиндром, полученный умножением двух трехзначных чисел.
*/

// function isPalindrom(num) {
//     let reverseNum = Number(num.toString().split('').reverse().join(''))
//     return num === reverseNum ? true : false
// }

// function generateNumber() {
//     let newNum = null
//     let arr = []
//     for (let i = 100; i < 999; i++) {
//         for (let j = 100; j < 999; j++) {
//             newNum = i * j
//             if (isPalindrom(newNum)) {
//                 arr.push(newNum)
//             }
//         }
//     }
//     return Math.max(...arr)
// }
// console.log(generateNumber());

/*
    №5
2520 - самое маленькое число, которое делится без остатка на все числа от 1 до 10.
Какое самое маленькое число делится нацело на все числа от 1 до 20?
*/

// function minNumber() {
//    let num = 1
//    let flag = false
//    let r = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,13,14,15,16,17,18,19,20]

//    while (flag === false) {
//        for (const j of r) {
//           if(num % j === 0) {
//                flag = true
//                continue
//            } else {
//                flag = false
//                break
//            }
//         }
//         num++
//     }
//     return num - 1
//    }

// console.log(minNumber());

/*
    №6
Сумма квадратов первых десяти натуральных чисел равна

1^2 + 2^2 + ... + 10^2 = 385
Квадрат суммы первых десяти натуральных чисел равен

(1 + 2 + ... + 10)^2 = 55^2 = 3025
Следовательно, разность между суммой квадратов и квадратом суммы первых десяти натуральных чисел составляет 3025 − 385 = 2640.

Найдите разность между суммой квадратов и квадратом суммы первых ста натуральных чисел.
*/

// function getPow() {
//     let powSum = null;
//     let sum = null
//     for(let i = 1; i <= 100; i++) {
//         powSum += Math.pow(i, 2)
//         sum += i
//     }

//     return Math.pow(sum, 2) - powSum
// }
// console.log(getPow());

// Из массива в объект

// function transform(arr) {

//     const newObj = {}

//     for (const item of arr) {
//         newObj[item.name] = item.value
//     }

//     return newObj;
// }

// const arr = [{name: 'name', value: 'Анатолий'},{name: 'age', value: 40}]

// console.log(transform(arr));

// function fact(num) {

//     let sum = 1n

//     for (let i = BigInt(num); i >= 1n; i--) {
//         BigInt(sum *= i)
//     }

//     let newArr = sum.toString().split('')

//     let sumNum = 0

//     for (const iterator of newArr) {
//         sumNum += +iterator
//     }

//     return sumNum
// }

// console.log(fact(100));

/*

    В функцию maxSum передается двумерный массив в виде треугольника (горки),
    необходимо найти наибольшую сумму от вершины до низа треугольника. С числа сверху мы можем переходить лишь на нижнее число и его соседей.
    Массив может иметь очень большое количество вложенных массивов.
    Проверять на правильность массива не нужно, передается всегда правильно составленный массив

*/

// function maxSum(arr) {

//     let targets = Array.from(arr)

//     for (let i = targets.length - 2; i >= 0; i--) {
//         targets[i] = targets[i].map((item, index) => {
//             let slice = targets[i+1].slice(
//                 ((index > 0) ? index - 1 : 0),
//                 index + 2
//             )
//             return item + Math.max(...slice)
//         })
//     }

//     return targets[0][0]

// }

// console.log(maxSum([
//     [1],
//     [4, 8],
//     [1, 5, 3],
// ])); //14

// console.log(maxSum([
//     [1],
//     [-3, -4],
//     [2, 1, 9],
// ])); //6

// let arr = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 6, 7, 9, 10, 11]

// function getSum(arr) {
//     let sum = 0
//     for (const item of arr) {
//         sum += item
//     }

//     return sum / arr.length
// }

// console.log(getSum(arr));

// localStorage

// document.querySelector('button').addEventListener('click', function() {
//   let value = document.querySelector('input').value;

//   let obj = {
//     text: value,
//   }

//   localStorage.setItem('headerText', JSON.stringify(obj));
// })

// document.addEventListener('DOMContentLoaded', function() {

//   let obj = JSON.parse(localStorage.getItem('headerText'));

//   if (obj.text && obj.text.trim()) {
//     document.querySelector('h1').textContent = obj.text;
//   }
// })

/*
 *
 * Решение статистической задачи!
 *
 */

// // Выборка

// // Первая задача

// let arr = [0,0,0,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,3,3,3,3,4,4,5,5,5,5,6,7,9,10,11].sort((a,b) => a - b);

// // Вторая задача
// // let arr = [289,203,359,243,232,210,251,246,224,239,220,211].sort((a,b) => a - b);

// // Третья задача
// // let arr = [1.2, 1.4, 1.6, 1.7,1.7, 1.8, 2.2, 2.3, 2.4, 6.4, 19.0, 23.6].sort((a,b) => a - b);

// // 4 задача
// // let arr = [1,2,3,4,5,6].sort((a,b) => a - b);

// // let str = prompt('Введите значения выборки через запятую')
// // let arrMap = str.split(',');
// // let arr = arrMap.map(Number).sort((a,b) => a - b);

// // Частота
// let num = arr.length;

// // Среднее
// function medium(arr) {
//   let medium = 0;
//   for (const iterator of arr) {
//     medium += iterator;
//   }

//   return  parseFloat((medium / arr.length).toFixed(2))
// }

// // Дисперсия
// function disp(arr, medium) {
//   let newArr = [];
//   let sumArr = 0;
//   for (const iterator of arr) {
//     newArr.push(Math.pow((iterator - medium), 2))
//   }
//   for (const iterator of newArr) {
//     sumArr += iterator;
//   }
//   return parseFloat(Math.sqrt(sumArr / num).toFixed(1))
// }

// // Медиана
// function mediana(arr) {
//   let mediumMediand = num / 2;
//   return (arr[Math.round(mediumMediand)] + arr[Math.round(mediumMediand) - 1]) / 2 ;
// }

// // 75-процентиль
// function sevenfiveProc(arr) {
//   return arr[Math.round(((arr.length * 75) / 100)) - 1];
// }

// // 25-процентиль
// function twofiveProc(arr) {
//   return arr[Math.round(((arr.length * 25) / 100) - 1)];
// }

// // // Гауссово распределение
// // function gaus(disp, medium, arr) {

// //   let newArr = [];
// //   let sumArr = 0;
// //   for (const iterator of arr) {
// //     newArr.push(Math.pow((iterator - medium), 2))
// //   }
// //   for (const iterator of newArr) {
// //     sumArr += iterator;
// //   }

// //   let step = Math.exp((1/2) * ((sumArr)/disp));
// //   let gaus = (1 / (disp * Math.sqrt(2 * Math.PI)));
// //   let pow = Math.pow(gaus, step);

// //   return pow;
// // }

// // console.log(gaus(disp(arr, medium(arr)), medium(arr), arr));
// console.log(arr);
// console.log('Среднее значение: ',  medium(arr));
// console.log('Дисперсия: ', disp(arr, medium(arr)));
// console.log('Медиана: ', mediana(arr));
// console.log('75-процентиль: ', sevenfiveProc(arr));
// console.log('25-процентиль: ', twofiveProc(arr));

// let ul = document.querySelector('ul')

// ul.innerHTML = `
//   <li>Значения: <span>${JSON.stringify(arr).replace(/,/g, ', ').replace('[', '').replace(']', '')}</span></li>
//   <li>Среднее значение: <span>${medium(arr)}</span></li>
//   <li>Дисперсия: <span>${disp(arr, medium(arr))}</span></li>
//   <li>Медиана: <span>${mediana(arr)}</span></li>
//   <li>75-процентиль: <span>${sevenfiveProc(arr)}</span></li>
//   <li>25-процентиль: <span>${twofiveProc(arr)}</span></li>
// `

// console.log();

// let wrapper = document.querySelector('.wrapper')

// wrapper.addEventListener('click', (event) => {
//   const tagName = event.target.tagName.toLowerCase();
//   if (tagName === 'p') {
//     event.target.style.color = 'red'
//   }
// })

// let counter = 0;

// // setTimeout(() => {
// //   console.log(++counter);
// // }, 3 * 1000)

// let interval = setInterval(() => {
//   console.log(++counter);
// }, 1000 * 2);

// setTimeout(() => {clearInterval(interval)}, 5 * 1000)

// client --> server --> DataBase --> server --> client

// console.log('Клиент: хочу получить данные о пользователе');
// console.log('...');

// setTimeout(function () {
//   console.log('Сервер запрашивает данные у БД');
//   console.log('...');

//   setTimeout(function () {
//     console.log('БД формирует данные для сервера');
//     console.log('...');

//     setTimeout(function () {
//       console.log('Сервер формирует данные для клиента');
//       console.log('...');
//       setTimeout(function () {
//         console.log('Клиент получил данные и отображает их');
//         console.log('...');
//       }, 1000);
//     }, 500);
//   }, 500);
// }, 1000);

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log('Сервер запрашивает данные у БД');
//     console.log('...');
//     resolve();
//   }, 1000);
// });

// promise
//   .then(function () {
//     return new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         let users = [
//           { uid: 'id1', name: 'Maxim' },
//           { uid: 'id2', name: 'Elena' },
//         ];
//         console.log('БД формирует данные для сервера');
//         console.log('...');
//         resolve(users);
//       }, 500);
//     });
//   })
//   .then(function (dbUsers) {
//     return new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         console.log('Сервер формирует данные для клиента');
//         console.log('...');
//         let users = dbUsers.map((user) => {
//           return {
//             id: user.uid,
//             firstName: user.name,
//             timestamp: Date.now(),
//           };
//         });
//         resolve(users);
//       }, 500);
//     });
//   })
//   .then(function (users) {
//     setTimeout(function () {
//       console.log('Клиент получил данные и отображает их', users);
//     }, 1000);
//   });

// document.querySelector('#btn').addEventListener('click', load);

// async function load() {
//   let url = 'https://jsonplaceholder.typicode.com/users';

//   let response = await fetch(url);
//   let data = await response.json();

//   let html = data
//     .map(function (item) {
//       return '<li>' + item.id + ' ' + item.name + '(' + item.email + ')</li>';
//     })
//     .join(' ');

//   document.querySelector('#list').insertAdjacentHTML('afterbegin', html);
// }

// function sleep(ms) {
//   return new Promise(function(resolve) {
//     setTimeout(function() {
//       resolve()
//     }, ms)

//   })
// }

// sleep(1500).then(() => console.log('1500'))
// sleep(3000).then(() => console.log('3000'))

// Promise.all([sleep(1500), sleep(3000)]).then(() => console.log('All'))
// Promise.race([sleep(1500), sleep(3000)]).then(() => console.log('race'))

/* Задача
  Реализуйте класс MyPromise, который будет рабоать точно так же,  как и Promise.
  Достаточно реализовать методы: then, catch, finally
  Методы all, race делать не нужно
*/

// let promise = new Promise(function(resolve,reject) {
//   setTimeout(function(){
//     resolve(2)
//   }, 1000)
// })
//   promise
//     .then(function(num) {
//       console.log(num = num * 2);
//     })
//     .catch(function() {
//       console.log('Error 202');
//     })
//     .finally(function() {
//       console.log('Finally');
//     })

class MyPromise {
  constructor(callback) {
    this.onCatch = null;
    this.onFinally = null;
    this.thenCbs = [];
    this.isRejected = false

    function resolver(data) {
      if (this.isRejected) {
        return
      }
      this.thenCbs.forEach((cb) => {
        data = cb(data);
      });

      if (this.onFinally) {
        this.onFinally();
      }
    }
    function rejecter(error) {
      this.isRejected = true
      if (this.onCatch) {
        this.onCatch(error);
      }
      if (this.onFinally) {
        this.onCatch();
      }
    }

    callback(resolver.bind(this), rejecter.bind(this));
  }
  then(cb) {
    this.thenCbs.push(cb);
    return this;
  }
  catch(cb) {
    this.onCatch = cb;
    return this;
  }
  finally(cb) {
    this.onFinally = cb;
    return this;
  }
}

const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});

promise
.then(num => num *= 2)
.catch(err => console.log(err))
.then(num => num *= 3)
.then(num => console.log(num))
.finally(() => console.log('finally'))
