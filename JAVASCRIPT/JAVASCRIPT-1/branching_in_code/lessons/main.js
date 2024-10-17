/* 

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
            // if (userChoise === 'камень' || userChoise === 'ножницы' || userChoise === 'бумага') {
            //     computerChoise = words[randomNum] // содержит варианты ответа из words и использует случайные числа из randomNum
            //     document.write(userChoise, computerChoise);

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
            //  else if (
            //     (userChoise === 'камень' && computerChoise === 'ножницы') ||
            //     (userChoise === 'ножницы' && computerChoise === 'бумага') ||
            //     (userChoise === 'бумага' && computerChoise === 'камень')
            // ) {
            //     alert('Мы выиграли!!!') // наша победа!
            //     isWinner = true
            // } else {
            //     alert('Упс.... Ты проиграл....:(') // проигрыш
            //     isWinner = true
            // } 
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

alert('Игра завершена!'); // Финальное сообщение после трёх раундов */



// ===================== Второй круг =====================

let userChoice;
let computerChoice;
let isWinner = false;
let countWin = 3
let countUserWin = 0
let countComputerWin = 0
const keyWords = ["камень", "ножницы", "бумага"]

//
while (countUserWin < countWin && countComputerWin < countWin) {
    while (isWinner === false) {
        userChoice = prompt(`Напиши ${keyWords[0]}, ${keyWords[1]}, или ${keyWords[2]}`)
        userChoice = userChoice.toLocaleLowerCase() // приведение к нижнему регистру
        if (userChoice === keyWords[0]
            || userChoice === keyWords[1]
            || userChoice === keyWords[2]) {

            computerChoice = keyWords[Math.floor(Math.random() * 3)]
            alert(`Компьютер выбрал: ${computerChoice}`)

            if (userChoice === computerChoice) {
                alert('Ничья!');
            } else if (
                (userChoice === keyWords[0] && computerChoice === keyWords[2]) ||
                (userChoice === keyWords[1] && computerChoice === keyWords[0]) ||
                (userChoice === keyWords[2] && computerChoice === keyWords[1])
            ) {
                alert('Компьютер выиграл!')
                countComputerWin++;
                isWinner = true
            } else {
                alert('Ты выиграл!')
                countUserWin++;
                isWinner = true
            }
        } else {
            alert('Введите корректное значение');
        }
    }
    isWinner = false;
    console.log(` Текущий счёт: Пользователь ${countUserWin} : Компьютер ${countComputerWin}`);
    
}

alert(` Текущий счёт: Пользователь ${countUserWin} : Компьютер ${countComputerWin}`)