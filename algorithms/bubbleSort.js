let numbers = [10, 5, 6, -5, 3, 1];

function bubbleSort(list) {
  let swapped = false;

  for (i = 0; i < list.length; i++) {
    for (j = 0; j < list.length - i; j++) {
      // Swap elements if they are in wrong order.
      if (list[j] > list[j + 1]) {
        [list[j], list[j + 1]] = [list[j + 1], list[j]];

        swapped = true;
      }
    }
    // If there were no swaps then array is already sorted and there is
    // no need to proceed.
    if (!swapped) {
      return list;
    }
  }

  return list;
}

// Time complexity:
// O(n²) in worst/average case.
// Best case O(n) with the swap flag.

console.log(bubbleSort(numbers));
