/* //# Метод push
// Метод добавляет элемент в конец массива.
let scores = [82, 75, 91, 85, 93, 88, 99]
scores.push(100, 232, 3424, 12)
console.log(scores) // [82, 75, 91, 85, 93, 88, 99, 100]
console.log(scores.length) // 8


//# Метод indexOf
// Возвращает первый индекс, по которому заданный элемент может быть найден в массиве, или -1, если такой элемент отсутствует.
let scores1 = [82, 75, 91, 85, 93, 88, 99]
console.log(scores1.indexOf(75)) // 1
console.log(scores1.indexOf(105)) // -1


//# Метод splice
// Метод splice может одновременно удалять старые элементы и добавлять новые.
let scores2 = [82, 75, 91, 85, 93, 88, 99]
console.log(scores2.splice(1, 3, 45, 37));
console.log(scores2);

//! scores2.splice(start, deleteCount, item1, item2)
// start: Индекс, с которого начинается изменение массива.
// deleteCount: Количество удаляемых элементов.
// item1, item2, ...: Элементы, которые нужно добавить в массив.


//# Удаление элементов
let scores3 = [82, 75, 91, 85, 93, 88, 99]
scores3.splice(2, 3) // Удаляем три элемента, начиная с индекса 2
console.log(scores3) // [82, 75, 88, 99, 100]


//# Добавление элемента
let scores4 = [82, 75, 91, 85, 93, 88, 99]
scores4.splice(0, 0, 1, 2, 3)
console.log(scores4);

//# Замена элемента
let scores5 = [82, 75, 91, 85, 93, 88, 99]
scores5.splice(0, 1, 2)
console.log(scores5); */

//$ Функция для расчета среднего балла
function calculateAverage(scores) {
    let sum = 0 // Инициализируем переменную для суммы оценок
 
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i] // Добавляем каждую оценку к сумме
    }
 
    // Возвращаем средний балл округленный до ближайшего целого
    return Math.round(sum / scores.length)
}

