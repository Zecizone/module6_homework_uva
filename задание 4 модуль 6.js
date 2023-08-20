// задание 4
//Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого
// и заканчивая вторым. Используйте setInterval.
function func(first, last) {
    let current = first;
    const intervalId = setInterval(() => {
        console.log(current);
        if (current === last) {
            clearInterval(intervalId);
        }
        current++;
    }, 1000);
}
func(5, 15);
