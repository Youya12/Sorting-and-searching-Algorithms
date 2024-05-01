const array = [50, 2, 14, 6, 1, 0, 3, 11, 23];

// Function to perform Insertion Sort on an array
const insertionSort = (arr) => {
    for (let i=1; i<arr.length; i++) {
        let currentVal = arr[i];
        let j = i-1;

// Shift values that are greater than currentVal to the right
        while (j >= 0 && arr[j] > currentVal) {
            arr[j+1] = arr[j];
            j--;
        }

// Insert the currentVal into the correct position in sorted order
        arr[j+1] = currentVal;
    }
    return arr;
};

// Display the original and sorted arrays
console.log(`Original array: [${array}]`);
console.log(`Sorted array: [${insertionSort(array)}]`);
