 // Примитивы - это типы данных, которые являются базовыми и не могут быть разделены на более простые элементы. Они представляют собой единичные значения, а не объекты

// string (слова, тексты)
// number (numbers, NaN)
// boolean (true & false)
// undefined (undefined, отстутствие неопределённости, хз) Используется системой JavaScript, когда переменной не присвоено значение, либо когда функция не возвращает явного значения
// null (определённое отстутствие какого либо объекта) используется программистом, чтобы явно указать отсутствие значения


// Объекты (массивы, объекты, функции)


/*     const studentName = 'Alice'
    let age = 36
    // 18 => Cola
    // 25 => Beer
    // 35 => Wine

    if(age < 18) {
        alert('Cola')
    } else if (age < 25){
        alert('Beer')
    } else if (age <= 35){
        alert('Wine')
    } else {
        alert('ЗОЖ')
    } */

/* let money = 10000
const expenses = 1000
let days = 0

while (money > 0) { // будет выполняться пока значение больше 0
    money = money - expenses
    days = days + 1
    console.log(money);
}
console.log(days); */

/* let deposit = 10000
const depositRate = 15
const result = 20000
let count = 0

while (deposit < 20000) {
    deposit = deposit * depositRate / 100 + deposit
    count = count + 1
}
console.log(deposit, count);
 */

/* const INITIAL_ENERGY = 10
const MIN_ENERGY_LEVEL = 0
const LOW_ENERGY_THRESHOLD = 3 // THRESHOLD(англ.) - порог


let energy = INITIAL_ENERGY // начальный уровень энергии робота
while (energy >= MIN_ENERGY_LEVEL) { // Цикл while продолжает выполняться, пока его условие (energy >= 0) остаётся истинным. В данном случае, цикл будет выполняться до тех пор, пока уровень энергии робота не упадёт до нуля или ниже.
    console.log('Текущий уровень энергии: ' + energy);
    if (energy === MIN_ENERGY_LEVEL) {
        console.log('Робот грустит... 😢 Нужно подзарядить!');
        break; // выходим из цикла, если энергия закончилась
    } else if (energy <= LOW_ENERGY_THRESHOLD) {
        console.log("Робот начинает чувствовать усталость... 🥱")
    } else  {
        console.log("Робот счастлив и бодрствует! 😊")
    }
    energy = energy - 1
}

console.log("Программа завершена. Робот отдыхает.") */


// ===================== Второй круг =====================

const user_name = 'Vladimir'
let age = 24
age = 18
console.log(age);

{
    const name = 'Vlad'
    let age = 25
    console.log(name, age);
    console.log(user_name);
}

// ===================== if else

if (age < 30) {
    console.log('Молодой');
} else {
    console.log('Старый');
}

// ===================== while

while (age < 30) {
    console.log('Молодой');
    age += 10
}

// =====================

// 0 - stop
// 3 - charge
// > - work
// step - -1

const counter = document.querySelector('.counter')
console.log(counter);


let energy = 10

counter.innerText = energy


/* while (energy >= 0) {
    if (energy === 0) {
        console.log('Нет сил больше... Отдыхаем');
        counter.style.backgroundColor = 'red'
        break
    } else  if (energy <= 3) {
        console.log('Нужна подзарядка');
        counter.style.backgroundColor = 'yellow'
    } else {
        console.log('Работаем');
        counter.style.backgroundColor = 'green'
    }
    energy = --energy
    counter.innerText = energy
} */

    const intervalId = setInterval(function () {
    if (energy === 0) {
        console.log('Нет сил больше... Отдыхаем');
        counter.style.backgroundColor = 'red'
    } else  if (energy <= 3) {
        console.log('Нужна подзарядка');
        counter.style.backgroundColor = 'yellow'
    } else {
        console.log('Работаем');
        counter.style.backgroundColor = 'green'
    }

    if (energy > 0) {
        energy--;
    }
    counter.innerText = energy
}, 500)
