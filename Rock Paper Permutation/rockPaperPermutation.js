// Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.

// Examples
// Input	Output
// roundCount:
// 1	[ "r", "p", "s" ]
// roundCount:
// 2	[ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ]
// roundCount:
// 0	[ ]


function rockPaperPermutation(roundCount) {
    var array = ["r", "p", "s"]
    var result = [];
    if (roundCount >= 2) {
        var alo = rockPaperPermutation(roundCount - 1)
        console.log("here here", alo)
        for (var i = 0; i < alo.length; i++) {
            for (var j = 0; j < array.length; j++) {

                result.push(alo[i] + array[j])

            }
        }
        return result
    } else if (roundCount === 1) {
        return array;
    }
    return [];
}

