const chevy = {
    make: 'Chevy',
    model: 'Bel Air',
    year: 1957,
    color: 'red',
    passengers: 2,
    convertible: false,
    milleage: 1021
}

const cadi = {
    make: 'GM',
    model: 'Cadilac',
    year: 1955,
    color: 'tan',
    passengers: 5,
    convertible: false,
    milleage: 12892
}

const fiat = {
    make: 'Fiat',
    model: '500',
    year: 1957,
    color: 'Medium Blue',
    passengers: 2,
    convertible: false,
    milleage: 88000
}

// year > 1955
// milleage < 50000

function prequal(car) {
    if (car.year > 1955 && car.milleage < 50000) {
        return true
    }
    return false
}

console.log(prequal(chevy));
console.log(prequal(cadi));
console.log(prequal(fiat));
