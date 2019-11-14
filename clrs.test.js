// insertion sort
function insertionSort(items) {
    let key, i;
    for (let j = 1; j < items.length; j++) {
        key = items[j];
        i = j - 1;
        while (i >= 0 && items[i] > key) {
            items[i + 1] = items[i];
            i--;
        }
        items[i + 1] = key;
    }
    return items;
}

// linear search
function linearSearch(val, items) {
    for (let i = 0; i < items.length; i++) {
        if (val === items[i]) {
            return i;
        }
    }
    return null;
}

// add binary integer stored in lists of same length
/*
function addBinaryList(a, b) {}

input = [[1,1,1,0,1], [1,0,0,0,1]];
output = addBinaryList(...input);
console.log('add binary lists', input, output);
*/

// merge sort
function merge(items, p, q, r) {
    const length_left = q - p;
    const length_right = r - q;

    const left = items.slice(p, q + 1);
    const right = items.slice(q, r + 1);

    left[length_left] = Infinity;
    right[length_right] = Infinity;

    let leftCursor = 0;
    let rightCursor = 0;
    for (let cursor = p; cursor <= r; cursor++) {
        if (left[leftCursor] < right[rightCursor]) {
            items[cursor] = left[leftCursor];
            leftCursor++;
        } else {
            items[cursor] = right[rightCursor];
            rightCursor++;
        }
    }
}

function mergeSort(items, p, r) {
    if (p === undefined) p = 0;
    if (r === undefined) r = items.length - 1;
    if (r - p < 2) return;

    const q = p + Math.floor((r - p) / 2);
    mergeSort(items, p, q);
    mergeSort(items, q, r);
    merge(items, p, q, r);
}

// binary search
function binarySearch(items, val, lo, hi) {
    if (lo === undefined) lo = 0;
    if (hi === undefined) hi = items.length - 1;

    if (lo > hi) return null;

    const mid = Math.floor((hi + lo) / 2);

    if (items[mid] === val) {
        return mid;
    } else if (items[mid] < val) {
        return binarySearch(items, val, mid + 1, hi);
    } else {
        return binarySearch(items, val, lo, mid - 1);
    }
}

// maximum-subarray
function maximumSubarrayOverMidline(items, lo, mid, hi) {
    let leftSum = -Infinity;
    let rightSum = -Infinity;

    let left;
    let right;

    let cursor;
    let sum = 0;

    // left of mid, including mid
    for (cursor = mid; cursor >= lo; cursor--) {
        sum += items[cursor];
        if (sum > leftSum) {
            leftSum = sum;
            left = cursor;
        }
    }

    // right of mid
    sum = 0;
    for (cursor = mid + 1; cursor <= hi; cursor++) {
        sum += items[cursor];
        if (sum > rightSum) {
            rightSum = sum;
            right = cursor;
        }
    }

    return [left, right, leftSum + rightSum];
}

function maximumSubarray(items, lo, hi) {
    // base case
    if (lo === hi) return [lo, hi, items[lo]];

    let mid = Math.floor((lo + hi) / 2);
    [leftLo, leftHi, leftSum] = maximumSubarray(items, lo, mid);
    [rightLo, rightHi, rightSum] = maximumSubarray(items, mid + 1, hi);
    [midLo, midHi, midSum] = maximumSubarrayOverMidline(items, lo, mid, hi);

    if (leftSum > rightSum && leftSum > midSum) {
        return [leftLo, leftHi, leftSum];
    } else if (rightSum > leftSum && rightSum > midSum) {
        return [rightLo, rightHi, rightSum];
    } else {
        return [midLo, midHi, midSum];
    }
}

function squareMatrixMultiplyIterative(A, B) {
    const size = A.length;
    const result = [];

    for (let i = 0; i < size; i++) {
        result[i] = [];
        for (let j = 0; j < size; j++) {
            result[i][j] = 0;
            for (let k = 0; k < size; k++) {
                result[i][j] = result[i][j] + A[i][k] * B[k][j];
            }
        }
    }

    return result;
}

describe('squareMatrixMultiplyIterative', () => {
    it('multiplies two square matrices iteratively', () => {
        const A = [[2,2], [3,3]];
        const B = [[4,4], [5,5]];
        const output = squareMatrixMultiplyIterative(A, B);
        expect(output).toEqual([[18,18], [27,27]]);
    });
});

function squareMatrixMultiplyRecursive(A, B) {
    const size = A_start[0] - A_end[0];
    if (size === 1) {
        const result = [[]];
        result[0][0] = A[0][0] + B[0][0];
    } else {

    }
    

    return result;
}

describe('Strassen\'s Matrix multiplication', () => {
    it('multiplies two square matrices recursively', () => {
        const A = [[2,2], [3,3]];
        const B = [[4,4], [5,5]];
        const output = squareMatrixMultiplyRecursive(A, B);
        expect(output).toEqual([[18,18], [27,27]]);
    });
});
