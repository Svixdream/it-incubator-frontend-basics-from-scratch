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


let output // вывод
/* ================== Работа с циклом while  =========================
let i = 0 // переменная хранящая индекс текущего массива

while (i < scores.length) { // продолжаем цикл до тех пор пока значение i будет меньше длины нашего массива
    output = 'Bubble solution #' + i + ' score: ' + scores[i]
    console.log(output);
    
    i = i + 1
} */ 



// ================== Работа с использованием for =========================

for (let i = 0; i < scores.length; i++){
    output = 'Bubble solution #' + i + ' score: ' + scores[i]
    console.log(output);
}

console.log('Bubbles tests: ' + scores.length); // выводим итоговое значение проведённых тестов
