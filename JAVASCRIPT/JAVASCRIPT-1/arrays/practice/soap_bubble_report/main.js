const scores = [60, 50, 60, 58, 54, 54, 
                58, 50, 52, 54, 48, 69,
                34, 55, 51, 52, 44, 51,
                69, 64, 66, 55, 52, 61,
                46, 31, 57, 52, 44, 18,
                41, 53, 55, 61, 51, 44]; // количество пузырей которое даёт каждый раствор

// Bubble solution #0 score: 60 (номер раствора и количество пузырей)
// Bubble solution #1 score: 50
// Bubble solution #2 score: 60
// Bubbles tests: 36 (нужно получить общее количество испытаний)
// Highest bubble score: 69 (указать максимальное количество пузырей которые получили из раствора)
// Solutions with highest score: #11, #18 (растворы давшие нам максимальное количество пузырей)


// ================== Работа с использованием for =========================

let output; // вывод
let highScore = 0 // максимальное значение пузырей

for (let i = 0; i < scores.length; i++){
    output = 'Bubble solution #' + i + ' score: ' + scores[i]
    console.log(output);
    if (highScore < scores[i]) { // берём текущее значение highScore и если оно больше scores[i] значит мы нашли новый максимум
        highScore = scores[i]
    } 
}



console.log('Bubbles tests: ' + scores.length); // выводим итоговое значение проведённых тестов
console.log('Highest bubble score: ' + highScore);


const bestSolutions = [] // упаковываем растворы давшие нам максимальное количество пузырей в переменную

for (let i = 0; i < scores.length; i++) {
    if (scores[i] === highScore) {
        bestSolutions.push(i) // когда мы находим образец с большим числом то мы добавляем i этого совпадения или номер этого элемента
    }
}

console.log('Solutions with highest score: ' + bestSolutions);


let minScore = scores[0] // // Начальное значение — первый элемент массива

for (let i = 0; i < scores.length; i++) { // начинаем с 1-го индекса
    if (minScore > scores[i]) { // // если текущее значение меньше minScore
        minScore = scores[i]
    }
}
console.log('Lowest bubble score: ' + minScore); 

/* Инициализация minScore: Мы инициализируем minScore не нулём, а первым элементом массива: minScore = scores[0]. Это необходимо, чтобы сравнивать значения корректно. Иначе твой начальный minScore равен 0, и он никогда не обновится, потому что все значения в массиве больше 0.


Теперь код корректно найдёт минимальное количество пузырей из всех тестов. */

const worstSolutions = [] // упаковываем растворы давшие нам минимальное  количество пузырей в переменную

for (let i = 0; i < scores.length; i++) {
    if (scores[i] === minScore) {
        worstSolutions.push(i) // когда мы находим образец с меньшим числом то мы добавляем i этого совпадения или номер этого элемента
    }
}
console.log('Solutions with the lowest score: ' + worstSolutions);