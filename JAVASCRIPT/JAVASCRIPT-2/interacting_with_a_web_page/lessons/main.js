window.addEventListener('load', function () {
    // =============================== Функция(Обработчик событий) ==========================
const btn = document.getElementById('color-button') // это функция, которая вызовется, когда случится событие (например, клик по кнопке)


// Разукрашиваем строки в случайные цвета
btn.addEventListener('click', function () { // это функция, которая вызовется, когда случится событие (например, клик по кнопке)
    const items = document.querySelectorAll('.item')

    for (let i = 0; i < items.length; i++) {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        const randomColor = `rgb(${red}, ${green}, ${blue}`
        items[i].style.backgroundColor = randomColor
    }
}) // позволяет выполнять функции, когда происходят определённые события, такие как клики, наведение мыши, нажатия клавиш и т. д.


// const handler = function () { // когда нажмем кнопку будет задействована данный обработчик событий
//     alert('No')
// }
// btn.addEventListener('click', handler)
// btn.removeEventListener('click', handler) передумал и решил удалить этот обработчик событий
})

/* const title = document.getElementById("course-title") // находим элемент по id
// title.style.fontWeight = '700' задаём жирность нашему элементу
// console.dir(title);  вывод как объект


const listItem = document.querySelector('.current') // нужно найти элемент которой у нас 1 на странице и у которого нет id или если решетка то пишем '#course-title', с классом .title
// listItem.style.backgroundColor = 'red'


const elements = document.querySelectorAll('.list .item') // позволяет получить доступ к каждому селектору 
// console.log([...elements]);
// console.log(typeof null);
const list = document.querySelector('.list')

console.log(list.innerHTML); // используется для изменения или получения HTML кода


title.innerText = 'Всё поменяли' // получаем чистый" текст без HTML-структуры


list.innerHTML = '<p>Добавить цвета!🎨</p>'


title.textContent = 'Ещё раз всё поменяли' // используется для получения или установки текстового содержимого элемента. Оно работает с текстом внутри элемента, не затрагивая HTML-разметку

console.log(title.getAttribute('id')); // используется для получения значения атрибута элемента



// =============================== картинка ==========================

const img = document.createElement('img') // используется для создания новых элементов HTML в документе
img.setAttribute('src', 'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/5a3ee558-50a5-44ed-a7c5-1a4cb1478ed7_9-dom-example.png') // используется для добавления, изменения или присвоения значений атрибутов HTML-элементам


img.classList.add('class', 'img') // устанавливаем класс img, позволяет добавлять, удалять, переключать и проверять наличие классов у элемента
//     add() — используется для добавление класса к элементу
//     remove() — удаляет класс из элемента.
//     toggle() — добавляет класс, если его нет, и удаляет, если он есть
//     contains() — проверяет наличие у элемента класса; возвращает булево значение (true, если данный класс есть, иначе false) 

img.setAttribute('width', '600');  // Ширина в 300 пикселей
img.setAttribute('height', '600'); // Высота в 200 пикселей
document.body.append(img) // используется для добавления новых элементов или текста в конец родительского элемента, работает как push 

title.classList.remove('title')*/










