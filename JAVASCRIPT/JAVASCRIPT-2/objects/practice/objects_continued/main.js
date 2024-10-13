

const fido = {
    name: 'Fido',
    weight: 48,
    breed: 'Mixed',
    loves: 'Walks'
}

function loseWeight(dog, amount) {
    dog.weight = dog.weight - amount;
}

loseWeight(fido, 10)

// alert(fido.weight)

// =====================================================
// =====================================================

const superSecretFile = {
    level: 'classified', // описание файла
    opened: 0, // сколько файл был прочитан раз
    password: 2,
    contents: "Dr. Evel's next meeting is in Detroit." // описание
};

function getSecret(file, secretPassword) {
    file.opened = file.opened + 1;
    if (secretPassword === file.password) {
        return file.contents
    } else {
        return 'Invalid password! No secret for you.'
    }
}

let content = getSecret(superSecretFile, 2)

console.log(content);
console.log(superSecretFile);

// =====================================================
// =====================================================

function setSecret (file, secretPassword, secret) {
    if (secretPassword === file.password) {
        file.opened = 0;
        file.contents = secret;
    }
}

setSecret(superSecretFile, 2, "Dr. Evel's next meeting is in Minsk.")
console.log(superSecretFile);

// =====================================================
// =====================================================


function setPassword(file, currentPassword, newPassword) {
    if (currentPassword === file.password) {
        file.password = newPassword
    }
}

setPassword(superSecretFile, 2, 3)
console.log(superSecretFile);
console.log(getSecret(superSecretFile, 3));


