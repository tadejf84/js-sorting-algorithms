/**
 * QuickSort is a Divide and Conquer algorithm
 * Picks an element as a pivot and partitions the given array around it
 * 
 * @param {array} arr - random
 * @param {number} left 
 * @param {number} right 
 * 
 * @returns {array} arr - sorted
 */
function quickSort(arr, left, right){

    // Check initial user input
    if (arr.length < 2) return arr;

    // Set default left and right values
    left = left ?? 0;
    right = right ?? arr.length - 1;
    let i = left, j = right;

    // Pick pivot at the middle of the array
    const pivotIndex = Math.floor((left + right) / 2);
    const pivotVal = arr[pivotIndex];

    // While left array element value lower than pivot and right array element value higher than pivot continue
    // Swap the element in the left array with the element in the right array
    // When this condition is not true anymore, break the loop
    while (i <= j) {
        while(arr[i] < pivotVal) {
            i++;
        }
        while(arr[j] > pivotVal) {
            j--;
        }
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }

    if (left < i - 1) {
        quickSort(arr, left, i-1);
    }

    if (right > i) {
        quickSort(arr, i, right);
    }

    return arr;
}


/**
 * Swap two elements in array
 * 
 * @param {arr} arr 
 * @param {number} a 
 * @param {number} b 
 */
function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

