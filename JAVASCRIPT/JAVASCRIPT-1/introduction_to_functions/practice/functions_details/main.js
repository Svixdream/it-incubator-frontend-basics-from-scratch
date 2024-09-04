function makeTea (cups, tea) {
    console.log('Brewing ' + cups + ' cups of ' + tea);
}

makeTea (3, 'Earl Grey') // правильный вызов функции


/* ====================== Ошибки =========================

makeTea(3) // недостающие аргументы функции (будет присвоено undefined вместо названия сорта чая)

makeTea(3, 'Earl Grey', 'hey ma!', 42) // лишние аргументы функции (значения будут проигрорированы)

makeTea('Earl Grey', 3) // аргументы переданы в неверном порядке */

function barkAtTheMoon() { // функция может спокойно работать без аргументов и параметров 
    console.log('Woooooooooooooo!');
}
barkAtTheMoon(); // вызов функции