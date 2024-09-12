const scores = [60, 50, 60, 58, 54, 54, 
                58, 50, 52, 54, 48, 69,
                34, 55, 51, 52, 44, 51,
                69, 64, 66, 55, 52, 61,
                46, 31, 57, 52, 44, 18,
                41, 53, 55, 61, 51, 44]; // количество пузырей которое даёт каждый раствор


const costs = [.25, .27, .25, .25, .25, .25,
                .33, .31, .25, .29, .27, .22,
                .31, .25, .25, .33, .21, .25,
                .25, .25, .28, .25, .24, .22,
                .20, .25, .30, .25, .24, .25,
                .25, .25, .27, .25, .26, .29]; // отображает стоимость того или иного раствора


// Bubble solution #0 score: 60 (номер раствора и количество пузырей)
// Bubble solution #1 score: 50
// Bubble solution #2 score: 60
// Bubbles tests: 36 (нужно получить общее количество испытаний)
// Highest bubble score: 69 (указать максимальное количество пузырей которые получили из раствора)
// Solutions with highest score: #11, #18 (растворы давшие нам максимальное количество пузырей)
// Bubble Solution #11 is the most cost effective (раствор №11 является наиболее экономически эффективным)

function getBestScores(array, maxValue) {
const bestSolutions = [] // упаковываем растворы давшие нам максимальное количество пузырей в переменную



// ================ находим лучшее значение ================
for (let i = 0; i < array.length; i++) {
if (array[i] === maxValue) {
bestSolutions.push(i) // когда мы находим образец с большим числом то мы добавляем i этого совпадения или номер этого элемента
}
}
return bestSolutions
}

function printAndGetHighScore(array) {
let highScore = 0 // максимальное значение пузырей



// ================ выводим результаты результаты для каждого образца в консоль ================
for (let i = 0; i < array.length; i++){
    console.log('Bubble solution #' + i + ' score: ' + array[i]); // указываем номер раствора и количество пузырей



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
for (let i = 1; i < array.length; i++) { // начинаем с 1-го индекса
if (minScore > array[i]) { // // если текущее значение меньше min
minScore = array[i]
}
} 
return minScore
}

function getWorstScores(array, minValue) {
const worstSolutions = [] // упаковываем растворы давшие нам минимальное  количество пузырей в переменную



// ================ находим растворы давшие нам наименьшее значение ================
for (let i = 0; i < array.length; i++) {
if (array[i] === minValue) {
worstSolutions.push(i) // когда мы находим образец с меньшим числом то мы добавляем i этого совпадения или номер этого элемента
}
}
return worstSolutions
}

function getMostCostEffectiveSolution(resultArray, costsArray, maxValue) {
    let index; // индекс элемента массива который даёт минимальную стоимость и наиболее экономически выгодно
    const bestSolutions = getBestScores(resultArray, maxValue)



// ================ находим самое экономически эффективное решение ================
    if (costsArray[bestSolutions[0]] < costsArray[bestSolutions[1]]) {     // Сравниваем стоимость решений с максимальным количеством пузырей
        index = bestSolutions[0] // если первое решение дешевле, сохраняем его индекс
    } else {
        index = bestSolutions[1] // иначе сохраняем индекс второго решения
    }
    return index
}

function getLeastCostEffectiveSolution (resultArray, costsArray, minValue) {
    let index; // индекс элемента массива, который даёт максимальную стоимость и является наименее экономически выгодным
    const worstSolutions = getWorstScores(resultArray, minValue);




// ================ находим самое экономически неэффективное решение ================
    if (costsArray[worstSolutions[0]] > costsArray[worstSolutions[1]]) {
        index = worstSolutions[0]
    } else {
        index = worstSolutions
    }
    return index
    }


const highScore = printAndGetHighScore(scores) // Нахождение максимального значения пузырей
const bestSolutions = getBestScores(scores, highScore) // Нахождение решений с максимальным количеством пузырей
const minScore = getLowestScores(scores) // Нахождение минимального значения пузырей
const worstSolutions = getWorstScores(scores, minScore) // Нахождение решений с минимальным количеством пузырей
const mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore) // находим самое экономически эффективное решение
const leastCostEffective = getLeastCostEffectiveSolution(scores, costs, minScore); // находим самое экономически неэффективное решение



console.log('Bubbles tests: ' + scores.length); // выводим итоговое значение проведённых тестов
console.log('Highest bubble score: ' + highScore); // указываем максимальное количество пузырей которые получили из раствора
console.log('Solutions with highest score: ' + bestSolutions); // выводим лучшие решения
console.log('Lowest bubble score: ' + minScore); // указываем минимальное количество пузырей которые получили из раствора
console.log('Solutions with the lowest score: ' + worstSolutions); // выводим худшие решения
console.log('Bubble Solution #' + mostCostEffective + ' is the most cost effective')
console.log('Bubble Solution #' + leastCostEffective + ' is the least cost effective');



