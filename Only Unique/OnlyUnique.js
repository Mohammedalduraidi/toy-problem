// Given a string, remove any characters that are not unique from the string.

// Examples
// Input	Output
// str:
// "abccdefe"	"abdf"
// str:
// "hello there"	"o tr"
// str:
// "xyz"	"xyz"
// str:
// "iiii"	""

function onlyUnique(str) {
    var obj = {}
    var a = ""
    for (var i = 0; i < str.length; i++) {
        if (obj[str[i]] === undefined) {
            obj[str[i]] = 0
        }
        obj[str[i]] = obj[str[i]] + 1
    }
    for (var key in obj) {
        console.log("hello", obj[key])
        if (obj[key] === 1) {
            a = a + key

        }

    }
    return a
}