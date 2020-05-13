/**
 * Selection sort - using 2 loops
 * 
 * @param {array} arr - random
 * 
 * @returns {array} arr - sorted
 */
function selectionSort1(arr){
    let min;

    for(let i = 0; i < arr.length; i++){
        min = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        swap(arr, i, min);
    }

    return arr;
}


/**
 * Selection sort - recursive
 * 
 * @param {array} arr - random
 * @param {number} startIndex
 * 
 * @returns {array} arr - sorted
 */
function selectionSort2(arr, startIndex) {
    let minIndex;
    startIndex = startIndex ?? 0; // If undefined, set it to 0

    while (startIndex < arr.length - 1) {
        minIndex = startIndex;
        for (let i = startIndex + 1; i < arr.length; i++) {
            if(arr[i] < arr[minIndex]) {
                minIndex = i;
            }
        }
        swap(arr, startIndex, minIndex);
        startIndex++;
        selectionSort2(arr, startIndex);
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
