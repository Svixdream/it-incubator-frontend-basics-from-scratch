// Дайте имя вашему виртуальному питомцу
/* let name = 'Strider'
// Состояние питомца
let happiness = 50
let hunger = 50 */

// Функция приветствиия
function sayHi() {
    console.log('Meowwww!')
}

// Функция для проверки состояния питомца
function checkStatus() {
    console.log(`Счастье: ${this.happiness}, Голод: ${this.hunger}`) //  'У того объекта который меня вызовет я прочитаю happiness и свойство hunger'
}

// Функция для кормления питомца
function feedPet(foodQuantity) {
    this.hunger -= foodQuantity // // то же самое, что и hunger = hunger - foodQuantity

    if (this.hunger < 0) {
        this.hunger = 0
    }
    console.log('Питомец покормлен!')
}

function play() {
    this.happiness += 10
    if (this.happiness > 100) {
        this.happiness = 100
    }
    console.log('Питомец выгулян!')
}

// ==================================

// const pet = {
//     name: 'Strider',
//     happiness: 50,
//     hunger: 50,
//     /* meow: sayHi // метод */
//     /* sayHi() {
//         console.log('Meow!') // разные функции, не путать с другой sayHi
//     } */
//    sayHi: sayHi // функция с 'Meowwww!'
// }

// pet.sayHi()

// sayHi()

// ==================================


const pet1 = {
    name: 'Strider',
    happiness: 50,
    hunger: 50,
    sayHi: sayHi,
    checkStatus: checkStatus,
    feedPet: feedPet,
    play: play
}

const pet2 = {
    name: 'Spider',
    happiness: 100,
    hunger: 100,
    sayHi: sayHi,
    checkStatus: checkStatus,
    feedPet: feedPet,
    play: play
}


pet2.feedPet(50)
pet2.play()
pet2.checkStatus()

pet1.feedPet(22)
pet1.play()
pet1.checkStatus()

// ==================================

const pet = {
    name: 'Strider',
    happiness: 50,
    hunger: 50,
    health: {
        hygiene: 5,
        energy: 5,
        dental: 100,
        coat: 3,
        // могут быть и другие показатели
    },
    // ...
}

function generateHealthReport(pet) {
    // const health = pet.health - 1 способ
    const {health} = pet

    for (const key in health) {
        console.log(`${key}: ${health[key]}`);
        
    }
}

// generateHealthReport(pet)


function checkHealth(pet) {
    // const health = pet.health - 1 способ
    const {health} = pet
    let isHealthGood = true
    let result = ''

    for (const key in health) {
        if (health[key] < 10) {
            isHealthGood = false
            result += `Дела плохи. ${key}: ${health[key]}. `
        }
    }
    return isHealthGood 
        ? 'Ваш pet здоров!' // ? если условие истинное
        : result // : если условие ложное
}

console.log(checkHealth(pet));









// ==================================

/* const car = { // ссылка на что-то, в данном случае car
    mark: 'BMW',
    model: '320',
    year: 2012,
    color: 'dark blue',
    engine:  {
        type: 'petrol',
        volume: 2000
    }
}

console.log(car.model);

car.model = 'Ford'

const newCar = car // ссылка на что-то, в данном случае на car

newCar.engine.volume = 2500 */

// car.volume = 2000
// console.log( car);
// car.volume = 2500

// delete car.volume

// const propName = 'enj volume'

// car[propName] = 3000