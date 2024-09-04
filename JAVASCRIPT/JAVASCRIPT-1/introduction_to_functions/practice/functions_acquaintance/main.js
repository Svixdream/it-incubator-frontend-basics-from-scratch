/* let dogName = 'rover';
let dogWeight = 23;
if (dogWeight > 20) {
    console.log(dogName + ' says WOOF WOOF');
} else {
    console.log(dogName + ' says woof woof');
}


dogName = 'spot';
dogWeight = 13;
if (dogWeight > 20) {
    console.log(dogName + ' says WOOF WOOF');
} else {
    console.log(dogName + ' says woof woof');
}


dogName = 'spike';
dogWeight = 53;
if (dogWeight > 20) {
    console.log(dogName + ' says WOOF WOOF');
} else {
    console.log(dogName + ' says woof woof');
}


dogName = 'lady';
dogWeight = 17;
if (dogWeight > 20) {
    console.log(dogName + ' says WOOF WOOF');
} else {
    console.log(dogName + ' says woof woof');
} */

function bark (name, weight) { // план действий, ещё не вызываем функцию
    if (weight > 20) { // тело функции
        console.log(name + ' says WOOF WOOF');
    } else {
        console.log(name + ' says woof woof');
    }
}

bark ('rover', 23) // вызываем функцию и передаём ей конкретные значения называемые (аргументы)
bark ('spot', 13) // порядок документов соответствует порядку параметров, в нашем случае 'name' соответстует имени животного 'spot'
bark ('spike', 53)
bark ('lady', 17)