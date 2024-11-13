


// ============================== Получение элементов из DOM ============================
const items = document.querySelectorAll('.item') // Список элементов с классом 'item'
const addFoo = document.querySelector('#add-button') // Кнопка, которая активирует функцию foo
const reset = document.querySelector('#reset-button') // Кнопка для сброса состояния элементов
const form = document.querySelector('.form') // Форма, из которой извлекаются данные
const list = document.querySelector('.list') // Список, в который добавляются новые элементы

let isTimerStarted = false; // указывает на то, запущен ли таймер
let timeout = null;


// ============================== Сброс состояния элементов ============================
reset.addEventListener('click', (event) => {
    if (!isTimerStarted) { // Проверяет, что таймер еще не запущен
        isTimerStarted = true // Устанавливает таймер как запущенный
        reset.textContent = 'ОТМЕНИТЬ' // textContent позволяет получить или изменить текстовое содержимое
        setTimeout(() => {
            items.forEach(el => {
                return (
                    el.classList.remove('done') // Убирает класс 'done' у каждого элемента
                )
            })
        }, 3000)
    } else {
        clearInterval(timeout)
        isTimerStarted = true
        reset.textContent = 'СБРОС'
    }
})
    /* reset.classList.remove('done') // Убирает класс 'done' у кнопки reset
     // макротаски выполняются в последнюю очередь



// ============================== Добавление нового элемента в список при отправке формы ============================
form.addEventListener('submit', (event) => { // event всегда есть в callback
    event.preventDefault() // Останавливает отправку формы
    const input = document.querySelector('.input')
    const text = input.value // Получает текст из поля ввода
    input.value = '' // Очищает поле ввода
    console.log(text);

    // const list = document.querySelector('.list')
    const newItem = document.createElement('li') // Создает новый элемент списка
    list.append(newItem) // Добавляет элемент в конец списка
    newItem.append(text) // Добавляет текст в элемент
    newItem.classList.add('item') // Присваивает новому элементу класс 'item'
})


/* =============== Эта закомментированная часть кода создает новую таблицу и добавляет в нее строки и ячейки с текстом из формы. =============== */
/*     const newTable = document.createElement('table')
    const tr = document.createElement('tr')
    const td = document.createElement('td')
    list.append(newTable)
    newTable.append(tr)
    tr.append(td)
    td.append(text) */


// ============================== Обработчики для клика по элементам списка ============================

// ========= 1 способ =============
/* for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', () => {
        items[i].classList.toggle('done')
    })
} */


// ========= 2 способ =============
/* const array = Array.from(items)
console.log(array);
array.map(el => {
    //debugger
    return (
        el.addEventListener('click', () => {
            el.classList.toggle('done')
        }) // означает если на тебя нажмут на тебе повится галочка 'сделано'
    )
}) */


// ========= 3 способ =============
const foo = () => {
    list.addEventListener('click', (event) => {
        const targetElement = event.target
        if (targetElement.classList.contains('item')) {
            targetElement.classList.toggle('done')
        }
    })
    /*     items.forEach((el) => {
            //debugger
            return (
                el.addEventListener('click', () => {
                    el.classList.toggle('done')
                }) // означает если на тебя нажмут на тебе повится галочка 'сделано'
            )
        }) // если один аргумент можно без круглых скобок  */
}
addFoo.addEventListener('click', () => {
    foo()
    addFoo.classList.toggle('done')
})


// таски - обычный код
// микротаски - запросы на сервер
// макротаски - setTimeout