/* const a = 'hello'
console.log(typeof a); */


// ========================================================
/* напишите функцию checkType, которая принимает один аргумент и возвращает его тип данных. Используйте typeof внутри функции.
const checkType = (a) => {
    return typeof a
}
console.log(checkType(11));
console.log(checkType("11")); */


// ========================================================
// Возьми объект person и функцию. Необходимо проконсолить через forIn все типы которые лежат в ключах.
/* const person = {
    name: 'Alice',
    age: 30,
    isEmployed: true
}

// function logPersonTypes(person) {
//     for (const key in person) {
//         console.log(typeof person[key]);
//     }
// }
// logPersonTypes(person) 

const logPersonTypes = (person) => {
    for (const key in person) {
        console.log(typeof person[key]);
    }
} */

// ========================================================
//напишите функцию isStping, которая принимает один аргумент и возвращает true, если тип аргумента — строка, и false в противном случае.

/* const isStping = (value) => {
    return typeof value === 'string'
}
console.log(isStping('123'));
console.log(isStping(1233)); */


// ========================================================
// используйте цикл, чтобы пройтись по массиву и вывести тип каждого элемента.
/* const arr = ["аррlе", 'orange', 100200, true, 200100300];

const arFoo = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(typeof arr[i])
    }
}
console.log(arFoo(arr)); */

// ========================================================
/* let a
let b = 100200
const foo = (val) => {
    if (val === undefined) {
        console.log('var is undefined')
    } else {
        console.log('var is defined')
    }
}
foo(a)
foo(b) */

// let a = 5
// let b = 'b'
// let c = a + b
// a = 100200
// console.log(a + b)
// console.log(typeof c)
// console.log(0 / 0);


// ========================================================
// напишите функцию checkundefined, которая принимает массив и возвращает количество элементов, равных undefined.
/* const arr = [1, undefined, 3, undefined, 5]
const checkundefined = (arr) => {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === undefined) {
            count++
        }
    }
    return count
}
console.log(checkundefined(arr)); */


// ========================================================
// Создайте функцию replaceNull, которая принимает объект и заменяет все значения null на строку "No value"
/* const obj = { a: null, b: 2, c: null }

const replaceNull = (objVal) => {
    for(const key in objVal) {
        if (objVal[key] === null) {
            objVal[key] = "No value"
        }
    }
    return objVal
}
console.log(replaceNull(obj)); */


// ========================================================
// console.log(Number.isNaN(NaN));


// ========================================================
// const d = 5
// const e = '5'
// console.log(d == e);


// ========================================================
// Создайте функцию checkTypeEqua1ity, которая принимает два значения и воввращает - true, если их типы равны, и false в противном случае.
/* const f = 5
const t = 5

const checkTypeEqua1ity = (par1, par2) => {
    return typeof par1 ==  typeof par2
}
console.log(checkTypeEqua1ity(f, t)); */


// ========================================================
// Напишите функцию isNullOrUndefined, которая принимает одно значение и возвращает true, если оно равно null или undefined (используя нестрогое сравнение)
/* const isNullOrUndefined = (val) => {
    return val == null 
}
console.log(isNullOrUndefined(undefined)); */


// ========================================================
// console.log(null == undefined);


// ========================================================
/* let obj1 = { name: 'Alice' } // #123 ссылочный тип данных
let obj2 = { name: 'Alice' } // #456
    console.log(obj1 == obj2); */


// ========================================================
// console.log('5' >= 3);


// ========================================================
// Напишите функцию compareNumberAndString, которая принимает число и строку, и возвращает true, если они - равны при нестрогом сравнении, и false в противном случае.
/* const compareNumberAndString = (val1, val2) => {
    return val1 === val2 ? true : false
}
console.log(compareNumberAndString(5, '5')); */


// ========================================================
// Создайте функцию isRea11yNaN, которая принимает значение и возвращает true, если оно является NaN. Используйте Number.isNaN().
/* const isReallyNaN = (val) => {
    return Number.isNaN(val)
}
console.log(isRea11yNaN(NaN));
console.log(isRea11yNaN("NaN")); */


// ========================================================
/* const multiply = 3 * '4'
console.log(multiply); */


// ========================================================
// напишите функцию numberToString, которая принимает число и возвращает его строковое представление.
/* String(123)
Number('123')
const numberToString = (value) => {
    return String(value)
}
console.log(numberToString('123')); */


// ========================================================
// создайте функцию checkTruthyFalsy, которая принимает значение и выводит в консоль, является ли оно псевдоистинным (truthy) или используйте условные операторы для проверки.
/* const checkTruthyFalsy = (value) => {
    if (value) {
        console.log('Значение является псевдоистинным (truthy)');
    } else {
        console.log('Значение является псевдоложным (falsy)');
    }
}
checkTruthyFalsy(null)
checkTruthyFalsy(NaN)
checkTruthyFalsy(' ')
checkTruthyFalsy(0)
checkTruthyFalsy('Hello') */


// ========================================================
//напишите функцию convertArrayToUppercase, которая принимает массив строк и возвращает новый массив, где все строки преобразованы в верхний регистр.
/* const arr = ["hello", "world"]

const convertArrayToUppercase = (arr) => {
    return arr.map(el => el.toUpperCase()) 
}
console.log(convertArrayToUppercase(arr)); */


// ========================================================
/* const arr = ["hello", "world"]
console.log(arr.length); */


// ========================================================
// Напишите функцию findCharacterIndex которая принимает строку и символ, и возвращает индекс первого вхождения этого символа в с троку. Если символ не найден, функция должна должна вернуть -1
/* const findCharacterIndex = (str, val) => {
    return str.indexOf(val)
}
console.log(findCharacterIndex('hello', 'e')); // 1
console.log(findCharacterIndex('hello', 'a')); // -1 */


// ========================================================
// slice
// Назначение: извлекает часть массива и возвращает новый массив.
// Изменяет оригинальный массив: Нет, slice, не изменяет исходный массив.
// Аргументы:
// start: начальный индекс (включительно) .
// end: конечный индекс (не включая) .
/* const array = [1, 2, 3, 4, 5]
const sliced = array.slice(1, 4);
console.log(sliced); */


// ========================================================
// splice
// Назначение: изменяет содержимое массива, удаляя или добавляя элементы.
// Изменяет оригинальный массив: Да, splice изменяет исходный массив.
// Аргументы:
// start: начальный индекс для изменения.
// deleteCount: количество элементов для удаления.
// items: элементы для добавления (необязательно)
/* const array = [1, 2, 3, 4, 5]
const spliced = array.splice(1, 2, 'a', 'b');
console.log(array);
console.log(spliced); */


// ========================================================
const array = [1, 2, 3, 4, 5, 6, 7];
const spliced = array.splice(5, 2, 66, 77) 
console.log(array); 
console.log(spliced); 












