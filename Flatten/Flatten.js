// Given an array of arrays, return all elements in a single array. You must use recursion.

// Hint: Use Array.isArray(elem) to see if something is an array.

// Examples
// Input	Output
// arrays:
// [ [ 10 ], [ 20, 30 ], [ 40 ] ]	[ 10, 20, 30, 40 ]
// arrays:
// [ 1, 2, [ 3 ], 4, [ 5, [ 6 ], 7 ] ]	[ 1, 2, 3, 4, 5, 6, 7 ]

function flatten(arrays) {
    var arr = [];
    if (!Array.isArray(arrays)) {
        arr.push(arrays)
    } else {

        for (var i = 0; i < arrays.length; i++) {
            arr = arr.concat(flatten(arrays[i]));
        }
    }
    return arr;

}