

let isWinner = false // есть ли победитель?
let userChoise; // выбор юзера
let computerChoise; // выбор ПК
const words = ['камень', 'ножницы', 'бумага'] // начинаются с 0, 1, 2, 3 варианты игры

let count = 0


while (count < 3) {
    isWinner = false
    count = count + 1
    console.log('Раунд ' + count, isWinner);
    document.write('<h2>Раунд ' + count + '</h2>');

    // ============ 1 способ ===========
    /*         if (userChoise === 'камень' || userChoise === 'ножницы' || userChoise === 'бумага') {
                computerChoise = words[randomNum] // содержит варианты ответа из words и использует случайные числа из randomNum
                document.write(userChoise, computerChoise); */

    while (isWinner === false) { // цикл продолжается пока isWinner === false
        userChoise = prompt('Введите \'камень\', \'ножницы\' или \'бумага\'.')
        userChoise = userChoise.toLowerCase() // перезаписываем переменную и задаём новое значение и превращаем её в строку из прописных букв
        // 'камень' или 'ножницы' или 'бумага'

        if (userChoise === 'камень' || userChoise === 'ножницы' || userChoise === 'бумага') {
            const randomNum = Math.floor(Math.random() * 3)

            // ============ 2 способ ===========
            switch (randomNum) {
                case 0:
                    computerChoise = 'камень'
                    break;
                case 1:
                    computerChoise = 'ножницы'
                    break;
                default:
                    computerChoise = 'бумага'
                    break;
            }

            document.write('<p>Мой выбор: ' + userChoise + '<p>')
            document.write('<p>Выбор компьютера: ' + computerChoise + '<p>')


            if (userChoise === computerChoise) {
                alert('Ничья, давай ещё попытку!')
            }
            // ============ 1 способ ===========
            /*  else if (
                (userChoise === 'камень' && computerChoise === 'ножницы') ||
                (userChoise === 'ножницы' && computerChoise === 'бумага') ||
                (userChoise === 'бумага' && computerChoise === 'камень')
            ) {
                alert('Мы выиграли!!!') // наша победа!
                isWinner = true
            } else {
                alert('Упс.... Ты проиграл....:(') // проигрыш
                isWinner = true
            } */
            // ============ 2 способ ===========
            else {
                const isUserWinner =
                    (userChoise === 'камень' && computerChoise === 'ножницы') ||
                    (userChoise === 'ножницы' && computerChoise === 'бумага') ||
                    (userChoise === 'бумага' && computerChoise === 'камень')

                const message = isUserWinner ? 'Ты победил' : 'Ты проиграл!'
                alert(message)
                isWinner = true
            }
        } else {
            alert('Вы ввели некорректное значение, побробуйте ещё раз.')
        }
    }
}

alert('Игра завершена!'); // Финальное сообщение после трёх раундов