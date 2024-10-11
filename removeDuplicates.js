export function removeDuplicates() {
  const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];
  const newArr = [...new Set(arr)];

  alert(`Изначальный массив:\n${arr}\nУникальные значения:\n${newArr}`)

}