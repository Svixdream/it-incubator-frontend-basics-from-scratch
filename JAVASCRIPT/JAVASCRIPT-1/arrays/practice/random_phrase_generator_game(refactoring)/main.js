
/* function makePhrases() {
    const words1 = ['Мой кот', 'Моя собака', 'Мой попугай'];
    const words2 = ['любит есть', 'хочет погрызть', 'всегда ищет'];
    const words3 = ['морковку', 'макароны', 'косточку'];

    const randomIndex_1 = Math.floor(Math.random() * words1.length) // убираем дробную часть и возвращаем случайное число умножая на длину массива
    const randomIndex_2 = Math.floor(Math.random() * words2.length)
    const randomIndex_3 = Math.floor(Math.random() * words3.length)

    const phrase = words1[randomIndex_1] + ' ' + words2[randomIndex_2] + ' ' + words3[randomIndex_3]
    return phrase
}

const result = makePhrases()

alert(result)
console.log(result); */

// ====================== Рефакторим ===================

function getRandomElement(array) { // нам нужно получить случайный индекс используя формулу Math.floor(Math.random() * array.length) и ориентируемся на длину массива array
    const randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex] // получаем случайный элемент массива и возвращаем его
}

function makePhrases() {
    const words1 = ['Мой кот', 'Моя собака', 'Мой попугай'];
    const words2 = ['любит есть', 'хочет погрызть', 'всегда ищет'];
    const words3 = ['морковку', 'макароны', 'косточку'];

    return getRandomElement(words1) + ' ' + getRandomElement(words2) + ' ' + getRandomElement(words3)
}

// Если я не хочу использовать переменную в нескольких местах, а просто хочу выполнить какое-то действие то я могу результат нашей функции вывести в alert

alert(makePhrases())