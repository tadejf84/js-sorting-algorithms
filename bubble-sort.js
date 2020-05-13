/**
 * Bubble sort algorithm
 * 
 * @param {array} arr - random
 * 
 * @returns {array} arr - sorted
 */
function bubbleSort(arr){

    // If only one element in the array
    if (arr.length < 2) return arr;

    for (let i = arr.length - 1; i >= 0; i--){
        for(let j = 0; j <= i; j++) {
            if(arr[j-1] > arr[j]) {
                swap(arr, j-1, j);
            }
        }
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

