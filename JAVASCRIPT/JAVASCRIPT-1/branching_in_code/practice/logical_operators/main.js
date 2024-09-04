// Оператор ||


/* const location1 = 3 // устанавливает первую позицию корабля в ячейке 3
const location2 = 4 // устанавливает вторую позицию корабля в ячейке 4
const location3 = 5 // устанавливает третью позицию корабля в ячейке 5

const guess = 4 // Эта строка определяет ячейку, которую пользователь считает местом нахождения корабля. В данном примере пользователь угадал ячейку с номером 4
if (guess === location1 || guess === location2 || guess === location3) {// // Если пользователь ввёл число 3, 4, 5 то мы выполняем код
    alert('HIT!') // выводит сообщение, что пользователь 'Попал'
} else { // во всех остальных случаях будет выведено
    alert('MISS!') // во всех других случаях выведется сообщение 'Мимо'
} */

/* if (guess === location1) {
    alert('HIT')
} else if (guess === location2) {
    alert('HIT')
} else if (guess === location3) {
    alert('HIT')
} else {
    alert('MISS')
} */


// Оператор &&

const inStock = true // определяем, что товар находится на складе, в данном случае true означает, что данный товар есть
const onSale = true // определяем, что участвует ли товар в распродаже, в данном случае true означает, что данный товар участвует

/* if(inStock === true){ // Если оба условия выполняются (то есть товар есть на складе и он на распродаже), тогда будет показано сообщение "Buy!!!"
    if(onSale === true)
        alert('Buy!!!')
}

if(inStock === true && onSale === true){ // Оператор && означает логическое И, то есть оба условия должны быть истинными для выполнения блока кода внутри if
    alert('Buy!!!')
} */

const price = 100

if(inStock === true && (onSale === true || price < 80)){ // Товар должен быть на складе (inStock === true) и (логическое И) при этом должен быть на распродаже (onSale === true) или иметь цену меньше 80 (price < 80)
    alert('Buy!!!')
}

