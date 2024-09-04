let sum = +prompt('Укажите стратовую сумму', 10000); // отображает диалоговое окно, которое запрашивает у пользователя ввод значения, в данном окне по умолчанию стоит 10000
const persent = +prompt('Укажите ставку в процентах', 15); // отображает диалоговое окно, которое запрашивает у пользователя ввод значения, в данном окне по умолчанию стоит 15
let count = 0 // счётчик используется для отслеживания количества раз за которое выполняется то или иное действие

const depositTerm = +prompt('Укажите срок депозита', 10) // показывает диалоговое окно с сообщением 'Укажите срок депозита' и предложенное значение по умолчанию 10

// мы хотим осуществить 10 итераций и посмотреть какую сумму мы накопим за 10 лет
while (count < depositTerm) { // цикл будет продолжаться ориентируясь на данные введенные пользователем в depositTerm будет выполняться тело цикла
    sum = sum + sum * (persent / 100)
    alert(sum)
    count = count + 1 // на каждой итерации говорим что, хотим увеличить счётчик на 1
    document.write(count + ': ' + sum + '<br>') // document.write() вставляет результат в текущую позицию в документе. Этот текст будет виден на веб-странице там, где вызван document.write() а count + ': ' + sum объединяет значения переменных count и sum с дополнительным текстом ': ' между ними. Результат конкатенации будет строкой, например, "10: 5000" '<br>' добавляет HTML-тег для перевода строки, что создаёт новую строку и в веб-странице это выглядит как список 
}