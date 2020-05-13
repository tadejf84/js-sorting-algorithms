/**
 * Heap sort algorithm - base on binary heap data structure
 * 
 * @param {array} arr - random
 * 
 * @returns {array} arr - sorted
 */
function heapSort(arr) {
    const len = arr.length;
    let last = len - 1;

    // If only one element in the array
    if (arr.length < 2) return arr;

    // 1. Build a max heap from the array
    buildMaxHeap(arr, len);

    // 2. Continue heap sorting until we have at least one element
    while(last > 0) {
        swap(arr, 0, last);
        heapify(arr, 0, last);
        last--;
    }

    // 3. Return sorted array
    return arr;
}

/**
 * Build a max heap out of all the elements of the array
 * Max heap is a binary tree where are all the parent nodes are larger or equal than their children
 * 
 * @param {array} arr 
 * @param {number} len 
 */
function buildMaxHeap(arr, len) {

    // Split in a binary tree
    let i = Math.floor(len / 2 - 1);

    // Build a max heap
    while (i >= 0) {
        heapify(arr, i, len);
        i--;
    }
}

/**
 * Sort down from root to the end of the heap
 * If violating the rule (parent node >= child node), correct it 
 * 
 * @param {array} heap 
 * @param {number} i 
 * @param {number} len 
 */
function heapify(heap, i, len) {
    let root, left, right;

    while(i < len) {
        root = i;

        left = 2 * i + 1; // left child node
        right = 2 * i + 2; // right child node

        if (left < len && heap[left] > heap[root]) root = left;
        if (right < len && heap[right] > heap[root]) root = right;
        if (root === i) return;

        swap(heap, i, root);
        i = root;
    }
}


/**
 * Swap two elements in array
 * 
 * @param {arr} arr 
 * @param {number} a 
 * @param {number} b 
 */
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

