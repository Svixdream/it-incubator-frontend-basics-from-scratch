const temp = 83 //температура
const willRain = true // дождь будет, т.к. значение 'true'
const humid = (willRain && temp > 80) // влажность
console.log(humid);

const inStock = true // определяем, что товар находится на складе, в данном случае true означает, что данный товар есть
const onSale = true // определяем, что участвует ли товар в распродаже, в данном случае true означает, что данный товар участвует

if (inStock && onSale) { // если в переменной лежит булевое значение мы можем сразу его прочитать и не писать (inStock === true && onSale === true)
    alert('Buy!!!')
}

const price = 100

if (inStock && (onSale || price < 80)) { // Товар должен быть на складе и (логическое И) при этом должен быть на распродаже или иметь цену меньше 80 (price < 80)
    alert('Buy!!!')
}


// const buyIt = (onSale && inStock) true

const buyIt = (onSale && inStock) // false
console.log(buyIt);
