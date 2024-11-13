// =================== Типы данных =========================

// Объявление переменной с помощью var
var userName = 'Alice' // string

// Объявление переменной с помощью let
let age = 25 // number

// Объявление переменной с помощью const
const isDeveloper = true // boolean

userName = 'Brendan'
age = 40
// isDeveloper = false нельзя изменять
// console.log(userName);

/* console.log(30 - 'text'); // NaN - некорректная математическая операция, строку 'text' нельзя преобразовать в число
console.log(30 - '5') // 25 - строка была преобразована в число */


// =================== Область видимости переменных (Scope) =========================

/* var x = 1
if (true) {
    var x = 2  // Та же переменная!
    console.log(x)  // 2
}
console.log(x)  // 2
// переменная var имеет функциональную область видимости, а не блочную (как у let и const). Это значит, что переменная, объявленная с var, будет доступна в рамках всей функции или, если она объявлена вне функций, — в глобальной области видимости.


let y = 1
if (true) {
    let y = 2  // Другая переменная
    console.log(y)  // 2
}
console.log(y) // 1 */


// =================== Поднятие переменных (Hoisting) =========================

/* console.log(a) // undefined
var a = 3

console.log(b) // ReferenceError: Cannot access 'b' before initialization
let b = 5 */


// =================== Практика =========================

/* Давайте напишем простую программу на JavaScript, которая будет моделировать робота-питомца, следящего за уровнем своего заряда. Робот будет сообщать о своём состоянии энергии и запрашивать "подзарядку" при необходимости 🤖 */

let energy = 10 // начальный уровень энергии робота

while (energy >= 0) {
    console.log('Текущий уровень энергии');
    
} // цикл будет выполняться до тех пор, пока уровень энергии робота не упадёт до нуля или ниже