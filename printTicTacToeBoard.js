export function printTicTacToeBoard() {
  let result = '';
  for (let i = 0; i < 3; i++) {
    let row = '';
    for (let j = 0; j < 3; j++) {
      if ((i + j) % 2 === 0) {
        row += 'х';
      } else {
        row += 'о';
      }
    }
    // console.log(row);
    result += row + '\n'; //удалите эту строчку и раскомментруйте console.log(row) чтобы результат в консоли был
  }
  alert(result) //это тоже надо удалить если нужна консолька
}
