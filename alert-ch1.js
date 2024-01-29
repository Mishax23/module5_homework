// Задание 1
const result = +prompt('Введите четное число', '')
if (typeof +result !== 'number') {
  alert('Упс, кажется, вы ошиблись')
} else if (isNaN(result % 2)) {
  alert('Ошибка, введено НЕ ЧИСЛО')
} else if (result % 2 === 0) {
  alert('Число четное')
} else {
  alert('число нечетное')
}
// Задание 2.
const x = true; 

    switch (typeof x) {
        case "number":
            console.log("x — число");
            break;
        case "string":
            console.log("х — строка");
            break;
        case "boolean":
            console.log("х — логический тип");
            break;
        default:
            console.log("Тип х не определён");
    }

// Задание 3
const left = 'Hello';
    let right = '';
    for (let i = left.length - 1; i >= 0; i -= 1) {
        right += left[i];
    }
    console.log(right);

// Задание 4
function getRandomInt(max) {
  return Math.floor(Math.random() * 100);
}
console.log(getRandomInt());

// Задание 5.
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i += 1) {
  console.log(arr [i]);
}

// Задание 6.
const arrX = [1, 2, true, 'string', null, 1, 2, 4, 6];
const arrZ = [];
for (let number of arrX) {
  if (number % 2 === 0) {
    arrZ.push(number);
  }
}
console.log(arrZ);

// Задание 7.
const mass = [1, 2, 3, 4, 5, 6, 7, 8, null, 9];
const neChet = [];
const chet = [];
for (let i = 0; i < 10; i += 1) {
  mass.push(i);
} for (let numbers of mass) {
  if (numbers % 2 !== 0) {
    neChet.push(numbers);
  }
}
console.log(neChet);

// Задание 8.
const map = new Map();
map.set(x, "y");
console.log(map);

let crust = 1;
