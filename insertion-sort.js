/**
 * Insertion sort algorithm
 * 
 * @param {array} arr - random
 * 
 * @returns {array} arr - sorted
 */
function insertionSort(arr) {
    
    arr.map( (el, i) => {
        while(i > 0 && arr[i - 1] > el){
            arr[i] = arr[i - 1];
            i--;
        }
        arr[i] = el;
    });

    return arr;
}

