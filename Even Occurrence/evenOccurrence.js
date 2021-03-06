// 3/4/16 UPDATE: If you solved this challenge previously, you may have to update your function name from evenOccurence (with 1 r) to evenOccurrence (with 2 rs)


// Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

// Examples
// Input	Output
// arr:
// [ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]	2
// arr:
// [ "cat", "dog", "dig", "cat" ]	"cat"
function evenOccurrence(arr) {
    // var counter = 0
    var obj = {}

    for (var i = 0; i < arr.length; i++) {
        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 1
        }
        else {
            obj[arr[i]] = obj[arr[i]] + 1
        }
    }

    for (var v = 0; v < arr.length; v++) {
        if (obj[arr[v]] % 2 === 0) {
            return arr[v]
        }
    }

    return null
}
