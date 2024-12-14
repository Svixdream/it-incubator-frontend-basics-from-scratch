// Объявляем глобальную переменную для хранения золота
let gold = 100

// Попытка построить башню
let buildingName = 'Tower'
let costGold = 30

/* // проверяем, хватает ли нам золота для строительства
if (gold >= costGold) {
    // вычитаем золото
    gold -= costGold // то же, что gold = gold - costGold
    console.log(`${buildingName}: work complete!`);
} else {
    console.log(`${buildingName}: not enough resources!`);
} */


// Попытка построить кузницу
buildingName = 'Blacksmith'
costGold = 140

/* if (gold >= costGold) {
    gold -= costGold
    console.log(`${buildingName}: work complete!`)
    } else {
        console.log(`${buildingName}: not enough resources!`)
} */


// функция проверки количества доступных ресурсов
function createBuilding(buildingName, costGold) {
    // Создаем переменную для проверки количества ресурса
    const hasEnoughGold = gold >= costGold
    
    if (hasEnoughGold) {
        gold -= costGold
        console.log(`${buildingName}: work complete!`)
    } else {
        console.log(`${buildingName}: not enough resources!`)
    }
}
createBuilding('Tower', 30)
createBuilding('Blacksmith', 140)


// Функция для увеличения ресурсов
function increaseResource(currentAmount, increment = 10) {
    const newAmount = currentAmount + increment
    return newAmount
}
console.log(newAmount);

/* gold = increaseResource(gold)
console.log(`New amount of gold: ${gold}`); */


/* // Вызов функции с параметром
gold = increaseResource(gold, 100)
console.log('New amount of gold: ' + gold) // New amount of gold: 180 */
