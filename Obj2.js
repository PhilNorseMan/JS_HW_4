/*Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7]*/

let arr = [1, 2, 3, 4, 5, 6, 7];
let newArr = new Array(5);

for (let i = 0; i < newArr.length; i++) {
    if (i > 2 && i < 5) {
        newArr[i] = arr[i + 2];
    } else
        newArr[i] = arr[i];
}

console.log(newArr);

/*arr.splice(3, 2);
console.log(arr);*/
/*проще так, из исходного массива удалятся 2 эл-та начиная с эл-та с индексом 3*/