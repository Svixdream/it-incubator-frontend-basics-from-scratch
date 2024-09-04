const depositAmount = 10000 // исходная сумма
const yearlyRate = 15 // годовая ставка
const depositTermInYears = 2 // срок депозита

//
/* let depositIncome = 0 // переменная для накопления суммы дохода (на момент старта она равна 0)
let count = 0 // счётчик

while (count < depositTermInYears) {
    depositIncome = depositIncome + depositAmount * (yearlyRate / 100)
    count = count + 1
} */

function getDepositIncome(amount, rate, term) {
    let depositIncome = 0 // переменная для накопления суммы дохода (на момент старта она равна 0)
    let count = 0 // счётчик

    while (count < term) {
        depositIncome = depositIncome + amount * (rate / 100)
        count = count + 1
    }
    return depositIncome // Возвращает значение depositIncome
    
}

//total

// console.log(depositIncome);

const depositIncome_1 =  getDepositIncome(depositAmount, yearlyRate, depositTermInYears) // рассчитай сумму депозита на данных условиях (создали переменную depositIncome_1 которая будет означать доход по 1 депозиту и в ней будет находиться значение которое будет вычислено этой функцией  и мы возвращаем её из функции для дальнейшего использования в коде)
const depositIncome_2 =  getDepositIncome(15000, 16, 3) // создаём депозит на других условиях (не нужно создавать заново код, а просто изменяю аргументы)
const totalIncome = depositIncome_1 + depositIncome_2

console.log(totalIncome);
