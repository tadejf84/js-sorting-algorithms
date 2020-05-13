/**
 * Merge sort algorithm - a Divide and Conquer algorithm
 * Divides array in 2 halves, recursively does this until array is sorted
 * 
 * @param {array} arr - random
 * 
 * @returns {array} arr - sorted
 */
function mergeSort (arr) {

    // If only one element in the array
    if (arr.length < 2) return arr;

    // Split array in two halves
    const middle = Math.floor(arr.length / 2); // Get middle point in array
    const left = arr.slice(0, middle);
    const right = arr.slice(middle, arr.length);

    // Merge both halves
    return merge(mergeSort(left), mergeSort(right));
}


/**
 * Merge left and right halves
 * 
 * @param {array} left 
 * @param {array} right 
 * 
 * @returns {array} output
 */
function merge(left, right) {
    let output = [],
        indexLeft = 0,
        indexRight = 0;;

    // Loop throught each element in left and right array and compare
    while (indexLeft < left.length && indexRight < right.length ) {
        if (left[indexLeft] < right[indexRight]) {
            output.push(left[indexLeft]);
            indexLeft++;
        } else {
            output.push(right[indexRight]);
            indexRight++;
        }
    }

    // Concatenate left and right arrays to the output array
    return output.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

