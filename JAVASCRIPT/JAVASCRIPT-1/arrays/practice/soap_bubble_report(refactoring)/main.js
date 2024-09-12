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

function getBestScores (array, maxValue) {
    const bestSolutions = [] // упаковываем растворы давшие нам максимальное количество пузырей в переменную



    // ================ находим лучшее значение ================
    for (let i = 0; i < array.length; i++) {
        if (array[i] === maxValue) {
        bestSolutions.push(i) // когда мы находим образец с большим числом то мы добавляем i этого совпадения или номер этого элемента
        }
    }
    return bestSolutions
}

function printAndGetHighScore (array) {
    let output; // вывод
    let highScore = 0 // максимальное значение пузырей



    // ================ выводим результаты результаты для каждого образца в консоль ================
for (let i = 0; i < array.length; i++){
    output = 'Bubble solution #' + i + ' score: ' + array[i]
    console.log(output); // указываем номер раствора и количество пузырей
    
    

    // ================ определяем наибольшее значение массива ================
    if (highScore < array[i]) { // берём текущее значение highScore и если оно больше scores[i] значит мы нашли новый максимум
        highScore = array[i]
        } 
    }
    return highScore
}

function getLowestScores(array) {
    let minScore = scores[0] // // Начальное значение — первый элемент массива



    // ================ опеределяем наименьшее значение массива ================
    for (let i = 0; i < array.length; i++) { // начинаем с 1-го индекса
        if (minScore > array[i]) { // // если текущее значение меньше minScore
        minScore = array[i]
        }
    } 
    return minScore
}

function getWorstScores(array, maxValue) {
    const worstSolutions = [] // упаковываем растворы давшие нам минимальное  количество пузырей в переменную



    // ================ находим растворы давшие нам наименьшее значение ================
        for (let i = 0; i < array.length; i++) {
        if (array[i] === maxValue) {
    worstSolutions.push(i) // когда мы находим образец с меньшим числом то мы добавляем i этого совпадения или номер этого элемента
        }
    }
    return worstSolutions
}


const highScore = printAndGetHighScore(scores) // Нахождение максимального значения пузырей
const bestSolutions = getBestScores(scores, highScore) // Нахождение решений с максимальным количеством пузырей
const minScore = getLowestScores(scores) // Нахождение минимального значения пузырей
const worstSolutions = getWorstScores(scores, highScore) // Нахождение решений с vbybvfkmysv количеством пузырей


console.log('Bubbles tests: ' + scores.length); // выводим итоговое значение проведённых тестов
console.log('Highest bubble score: ' + highScore); // указываем максимальное количество пузырей которые получили из раствора
console.log('Solutions with highest score: ' + bestSolutions); // выводим лучшие решения
console.log('Lowest bubble score: ' + minScore); // указываем минимальное количество пузырей которые получили из раствора
console.log('Solutions with the lowest score: ' + worstSolutions); // выводим худшие решения