//задание 1
    //Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
    //Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
    //При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, true, 'string', null, NaN];
let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;

function getOddEven(arr) {
    for (let item of arr) {
        if (typeof item === 'number' && !isNaN(item)) {
            if (item === 0) {
                zeroCount++;
            } else if (item % 2 === 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }
    }
    console.log(`Количество четных: ${evenCount}, нечетных: ${oddCount}, нулевых: ${zeroCount}`);
}

getOddEven(arr);
