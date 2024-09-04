const depositAmount = 10000 // исходная сумма
const yearlyRate = 15 // годовая ставка
const depositTermInYears = 2 // срок депозита

function wrapper() {
    function getDepositIncome(amount, rate, term) {
        let depositIncome = 0 // переменная для накопления суммы дохода (на момент старта она равна 0)
        let count = 0 // счётчик
    
        while (count < term) {
            depositIncome = depositIncome + amount * (rate / 100)
            count = count + 1
        }
        return depositIncome // Возвращает значение depositIncome
        
    }
    const income_1 = getDepositIncome(depositAmount, yearlyRate, depositTermInYears)
    console.log(income_1);
}

wrapper ()

//

// const income_2 = getDepositIncome(10000, 30, 3)
// console.log(income_1);
