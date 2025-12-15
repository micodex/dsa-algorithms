const list = [1, 5, -1, 2];

function selectionSort(list) {
  for (let i = 0; i < list.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[minIndex]) {
        minIndex = j;
      }
    }

    // swap
    if (minIndex !== i) {
      [list[i], list[minIndex]] = [list[minIndex], list[i]];
    }
  }

  return list;
}

const sorted = selectionSort(list);

console.log(sorted);
