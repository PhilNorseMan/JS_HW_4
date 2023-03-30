/*Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3*/

function randomizeInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function elementsSum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

function findMin(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min)
            min = arr[i];
    }
    return min;
}

function findThree(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 3)
            count++;
    }
    if (count > 0)
        console.log("There is " + count + " number three in this array");
    else
        console.log("There is no number three in this array");
}

let arr = new Array(5);
for (let i = 0; i < arr.length; i++) {
    arr[i] = randomizeInt(0, 9);
}

console.log(arr);
console.log("sum of elements is: " + elementsSum(arr));
console.log("minimal value is: " + findMin(arr));
findThree(arr);