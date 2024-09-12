// ================ Методы ================
/* const prices = [23, 26, 36, 46, 54, 59] // элементы в списках называются индексы
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
console.log(prices); */



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
