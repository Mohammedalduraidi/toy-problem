// Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
// If there are two runs of equal length, return the first one. Return [0,0] for no runs.

// Examples
// Input	Output
// string:
// "abbbcc"	[ 1, 3 ]
// string:
// "aabbc"	[ 0, 1 ]
// string:
// ""	[ 0, 0 ]
// string:
// "mississippi"	[ 2, 3 ]
// string:
// "abcdefgh"	[ 0, 0 ]
// string:
// "abccccccc"	[ 2, 8 ]

function longestRun(string) {

    var counter = 0
    var obj = {}
    for (var i = 0; i < string.length; i++) {
        if (string[i] === string[i + 1] && string[i] !== undefined) {

            counter++
        } else {
            obj[i] = i - counter
            counter = 0
        }


    }
    var max = 0
    var arr = []
    for (var key in obj) {

        if (max < key - obj[key]) {
            max = key - obj[key]
            arr = [obj[key], parseInt(key)]

        }

    }
    if (arr.length === 0) {
        return [0, 0]
    }

    return arr
}