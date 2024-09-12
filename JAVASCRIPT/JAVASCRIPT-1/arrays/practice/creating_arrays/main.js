// У нас есть фабрика по производству мыльных пузырей, на фабрике было испытано 10 образцов, с каждого образца получили некоторое количество пузырей

// 0 => 60
// 1 => 50
// 2 => 60
// 3 => 58
// 4 => 54
// 5 => 54
// 6 => 58
// 7 => 50
// 8 => 52
// 9 => 54


const scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54];

console.log(scores[0]); // указываем индекс элемента который хотим получить
console.log(scores[2]);

const pets = ['dog', 'cat', 'rat']

console.log(pets[2]);
console.log(pets[3]);

console.log(pets.length);
console.log(scores.length);

pets[2] = 'parrot' // изменяем название 'rat' на 'parrot'
console.log(pets);
console.log(scores);
