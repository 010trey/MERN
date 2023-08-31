function partition(arr, low, high) {
    const pivot = arr[low];
    let left = low + 1;
    let right = high;

    while (true) {
        while (left <= right && arr[left] <= pivot) {
            left++;
        }

        while (arr[right] >= pivot && right >= left) {
            right--;
        }

        if (right < left) {
            break;
        }

        // Swap elements at left and right
        [arr[left], arr[right]] = [arr[right], arr[left]];
    }

    // Swap pivot with element at right
    [arr[low], arr[right]] = [arr[right], arr[low]];

    return right;
}

function quicksort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pivotPosition = partition(arr, low, high);
        quicksort(arr, low, pivotPosition - 1);
        quicksort(arr, pivotPosition + 1, high);
    }
}

// Example usage:
const unsortedArray = [7, 2, 1, 6, 8, 5, 3, 4];
quicksort(unsortedArray);
console.log(unsortedArray);
