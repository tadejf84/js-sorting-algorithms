/**
 * Shell sort algorithm
 * 
 * @param {array} arr - random
 * 
 * @returns {array} arr - sorted
 */
function shellSort(arr) {

    // Define initial gap
    let gap = arr.length / 2;

    while (gap > 0) {
        for (i = gap; i < arr.length; i++) {
            for (let j = i; j >= gap && arr[j] < arr[j-gap]; j -= gap) {
                swap(arr, j, j-gap);
            }
        }
        
        // Compute new gap value
        gap = parseInt( (gap - 1) / 3 );
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
  
