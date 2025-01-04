/* // ================ Методы ================
 const prices = [23, 26, 36, 46, 54, 59] // элементы в списках называются индексы
 const lastIndex = prices.length - 1 // узнаём последний элемент массива (59)
console.log(prices[lastIndex]);

prices[0] = 100 // изменяем 1 элемент массива 23 на 100
console.log(prices);
 
const nextIndex = prices.length // добавляем новый элемент в массив
prices[nextIndex] = 33
console.log(prices);
 
const prices = new Array(23, 26, 36, 46, 54, 59) // это один из способов создать массив 
console.log(prices);

console.log(prices.push(33)); // добаляем
 
const lastEL = prices.pop() // удаляем

console.log(prices.pop());

prices.unshift(100) // добавляет первый элемент массива
prices.shift() // удаляет первый элемент массива
console.log(prices);
 
const index = prices.indexOf(1000) // используется для поиска элемента
console.log(prices.includes(100)); // который проверяет, содержит ли строка или массив определенный элемент в true или false
 
const lastSpl = prices.splice(3, 3) // позволяет добавлять, удалять или заменять элементы в массиве
console.log(prices); 



// ================ Цикл for ================
// ================ Функция для расчета среднего балла ================
const myScores = [82, 75, 91, 85, 93, 88, 99]

function calculateAverage(scores) {
    let sum = 0
    for (let i = 0; i < scores.length; i++) {
        sum = sum + scores[i]
    }
    return Math.round(sum / scores.length) // Возвращаем средний балл округленный до ближайшего целого
}



// ================ Функция для перевода баллов в другую шкалу ================
function classifyScores(scores) {
    const classifieldScores = []

    for (let i = 0; i < scores.length; i++) {
        let grade // объявляет переменную, которая будет хранить пятибалльную оценку
        const score = scores[i] // извлекает текущий балл из принимаемого массива scores на позиции i. Значение score будет использоваться для определения соответствующей пятибалльной оценки

        if (score >= 90) {
            grade = '5'
        } else if (score >= 80) {
            grade = '4'
        } else if (score >= 50) {
            grade = '3'
        } else {
            grade = '2'
        }
        classifieldScores.push(grade) // обавляет пятибалльную оценку grade в конец массива classifiedScores
    }
    return classifieldScores
}   


const average = calculateAverage(myScores)
const classifiedScores = classifyScores(myScores)


console.log(`Classified scores: ${classifiedScores}`)
console.log(`Средний балл студента: ${average}`); // Выведет средний балл



// ================ Функция reverseArray ================
function reverseArray(array) {
    const result = []
    for (let i = array.length - 1; i >= 0; i--) {
        result[result.length] = array[i]
    }
    return result
}
console.log(reverseArray([1, 2, 3, 4, 5]));



// ================ Функция removeElement ================
function removeElement(array, el) {
    const result = []
    for(let i = 0; i < array.length; i++) {
        if (array[i] !== el) {
            result.push(array[i])
        }
    }
    return result
}
console.log(removeElement(myScores, 82));
 */


// ===================== Второй круг =====================

/* 
const array = [1, 2, 3, 4, 5, 6, 7]
const strings = [ 'a', 'b', 'c']

console.log(array.length);
console.log(strings.length);

// доступ к элементу

console.log(array[3]);
console.log(strings[3]);

array[0] = 10
console.log(array);

array[7] = 17
array[array.length] = 21
console.log(array[array.length - 1]);
console.log(array);

const scores = [82, 75, 91, 85, 93, 88, 99, 100]

// scores[scores.length] = 95
const newLength = scores.push(95)
console.log(newLength);
console.log(scores);

scores.length = scores.length - 1
const lastEl = scores.pop()

console.log(lastEl);

const students = ['Bob', 'Alex', 'Donald', 'Donald']

students.unshift('student', 32) // добавляет первый элемент массива
console.log(students);

students.shift() // удаляет первый элемент массива
students.shift() // удаляет первый элемент массива
students.shift() // удаляет первый элемент массива
console.log(students);

const result = students.indexOf('Alex')

const resultEl = students.filter(st => st === 'Donald')
console.log(resultEl); */

// =================== Функция для расчета среднего балла ================

const scores = [82, 75, 91, 85, 93, 88, 99, 100]

// 1 вариант

let sum = 0
/* let index = 0

while (index < scores.length) {
    sum += scores[index]
    index++
}
const average = sum / scores.length

console.log(average); */


// 2 вариант

/* for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
}
const averageSum = sum / scores.length
console.log(averageSum); */

function calculateAverageScores (arrayScores) {
    for (let i = 0; i < arrayScores.length; i++) {
        sum += arrayScores[i];
    }
    const averageSum = sum / arrayScores.length
    return averageSum
}

console.log(calculateAverageScores(scores));


// ================= Функция для перевода баллов в другую шкалу ==================

// 90 => A
// 80 => B
// 70 => C
// 60 => D
// 0 => F

function classifyScores(arrayScores) {
    const classifiedScores = []
    let grade;
    for (let i = 0; i < arrayScores.length; i++) {
        const score = arrayScores[i];
        if (score >= 90) {
            grade = 'A'
        } else if (score >= 80) {
            grade = 'B'
        } else if (score >= 70) {
            grade = 'C'
        } else if (score >= 60) {
            grade = 'D'
        } else {
            grade = 'F'
        }
        classifiedScores.push(grade)
    }
    return classifiedScores
}
console.log(classifyScores(scores));

// ================= Упражнения ==================

// 1. Функция reverseArray

function reverseArray (array) {
    const result = []
    for (let i = array.length - 1; i >= 0; i--) {
        result[result.length] = array[i]
    }
    return result
}
console.log(reverseArray(scores));

// 2. Функция removeElement

function removeElement (array, el) {
    const result = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== el) {
            result.push(array[i]);
        }
    }
    return result
}
console.log(removeElement(scores, 100));
