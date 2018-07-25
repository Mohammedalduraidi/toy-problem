// Given an alphabet and a string of text, write a method that tallies the count of each letter defined in said alphabet (case insensitive), then return the result of this tally.

// Examples
// Input	Output
// alphabet:
// "aBc"
// text:
// "aabbccdd"	"a:2,b:2,c:2"
// alphabet:
// "x"
// text:
// "Racer X is my friend :)"	"x:1"
// alphabet:
// "123"
// text:
// "o hai"	"no matches"
function alphaCount(alphabet, text) {
    var obj = {}
    var array = []
    var x = "no matches"
    var alpha = alphabet.toLowerCase()
    var text = text.toLowerCase()


    for (var i = 0; i < alpha.length; i++) {
        obj[alpha[i]] = 0

    }
    for (var j = 0; j < text.length; j++) {
        if (alpha.includes(text[j])) {
            obj[text[j]] += 1
        }
    }

    for (var q = 0; q < alpha.length; q++) {
        if (obj[alpha[q]] > 0) {
            array.push(alpha[q] + ":" + obj[alpha[q]])
        }
    }

    if (array[0] === undefined) {
        return x
    } else {
        return array.join()
    }



}