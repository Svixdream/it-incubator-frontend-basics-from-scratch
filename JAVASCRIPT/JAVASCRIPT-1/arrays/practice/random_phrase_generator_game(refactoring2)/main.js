function getRandomElement(array) { // нам нужно получить случайный индекс используя формулу Math.floor(Math.random() * array.length) и ориентируемся на длину массива array
    const randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex] // получаем случайный элемент массива и возвращаем его
}

const words1 = ['Мой кот', 'Моя собака', 'Мой попугай'];
const words2 = ['любит есть', 'хочет погрызть', 'всегда ищет'];
const words3 = ['морковку', 'макароны', 'косточку'];
const words4 = ['Мой хомяк', 'Моя крыса', 'Мой енот']


function makePhrases(param1, param2, param3) {
    const result = getRandomElement(param1) + ' ' + getRandomElement(param2) + ' ' + getRandomElement(param3)
    return result
}

// Если я не хочу использовать переменную в нескольких местах, а просто хочу выполнить какое-то действие то я могу результат нашей функции вывести в alert

alert(makePhrases(words4, words2, words3))