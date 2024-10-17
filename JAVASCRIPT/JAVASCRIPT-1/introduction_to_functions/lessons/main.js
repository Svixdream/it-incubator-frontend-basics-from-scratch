
/* let gold = 100 // стартовое количество денег
 let buildingName = 'Tower' // тип здания (башня)
let costGold = 30 // стоимость башни


if (gold >= costGold) {
    gold = gold - costGold
    console.log(buildingName + ': work complete!'); // старый тип записи    
} else {
    console.log(`${buildingName}: not enough resources!`); // заменяет собой buildingName + ''
}

buildingName = 'Blacksmith'
costGold = 140


if (gold >= costGold) {
    gold = gold - costGold
    console.log(buildingName + ': work complete!'); // старый тип записи    
} else {
    console.log(`${buildingName}: not enough resources!`); // заменяет собой buildingName + ''
} 

createBuilding('Tower', 30)
createBuilding('Blacksmith', 140)
console.log(gold);

gold = increaseResource(gold)

console.log(gold);
createBuilding('Blacksmith', 140)


increaseGold()
console.log(gold);

decreaseGold(30)
console.log(gold);

const num1 = 10
const num2 = 20
const num3 = 20
const num4 = 20


alert(getSum(num3, num4))
alert(getSum(num1, num2))
alert(getSum(num2, num3))



function createBuilding(buildingName, costGold) {
    if (gold >= costGold) {
        gold -= costGold // gold = gold - costGold
        console.log(buildingName + ': work complete!'); // старый тип записи    
    } else {
        console.log(`${buildingName}: not enough resources!`); // заменяет собой buildingName + ''
    }
}
// ================ 3 вариант ==================
function increaseResource(resourceName, increment = 100) { 
    const result = resourceName + increment
    return result
}
function increaseGold(increment = 100) {
    gold = gold + increment
}
function decreaseGold(decrement = 100) {
    gold = gold - decrement
}
function getSum(n1, n2) { // Эта функция принимает два аргумента n1 и n2, складывает их и возвращает результат
    return n1 + n2
}

 function getSumOfTwoNumber (number_1, number_2) {
    // const result = number_1 + number_2;
    // return result 

    // ================ 2 вариант ===============
    return number_1 + number_2
}
const a = 12;
const b = 34;

const sum = getSumOfTwoNumber(a, b) // Когда оператор return result; выполняется, значение переменной result (в нашем примере это 46) возвращается не в саму функцию, а в то место, где функция была вызвана

console.log(sum); // После этого переменная sum хранит результат работы функции (46), и ты можешь использовать её для дальнейших операций 

================ 1 вариант ==================
function increaseResource(resourceName, increment) {
    if (increment) {
        return resourceName + increment
    } else {
        return resourceName
    }
}

// ================ 2 вариант ==================
function increaseResource(resourceName, increment = 100) { // Если второй аргумент не указан, то increment по умолчанию равен 100
    return resourceName + increment

} */



// ===================== Второй круг =====================

let gold = 100;


/* let buildingName = 'Tower';
let costGold = 30


buildingName = 'Blacksmith'
costGold = 140 */


/* const createBuilding = (buildingName, costGold) => {
    if (gold >= costGold) {
        gold = gold - costGold
        console.log(`${buildingName}: work complete!`);
    } else {
        console.log(`${buildingName}: not enough resources!`);
    }
} */

createBuilding('Tower', 30)
createBuilding('Blacksmith', 140)


/* function increaseResource (resourceName, increment) {
    const result = resourceName + increment
    return result
} */


const increaseResource = (resourceName, increment = 50) => resourceName + increment
gold = increaseResource(gold)
gold = increaseResource(gold)
gold = increaseResource(gold, 348)
createBuilding('Blacksmith', 140)
createBuilding('Blacksmith', 140)
createBuilding('Blacksmith', 140)



function createBuilding (buildingName, costGold) {
    if (gold >= costGold) {
        gold = gold - costGold
        console.log(`${buildingName}: work complete!`);
    } else {
        console.log(`${buildingName}: not enough resources!`);
    }
}


function func(param) {
    if (param > 100) {
        return 'OK'
    } else {
        return 'WOW'
    }
}
console.log(func('eee'));
