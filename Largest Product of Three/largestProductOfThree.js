// Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

// Examples
// Input	Output
// array:
// [ 2, 1, 3, 7 ]	42
// array:
// [ 0, 2, 3 ]	0
function largestProductOfThree(array) {
    var saveIndex;
    var max;
    var max1;
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (array[i] < array[j]) {
                saveIndex = array[j]
                array[j] = array[i]
                array[i] = saveIndex
            }
        }
    }
    max = array[array.length - 1] * array[array.length - 2] * array[array.length - 3]
    max1 = array[0] * array[1] * array[array.length - 1]

    if (max > max1) { return max }
    return max1

}