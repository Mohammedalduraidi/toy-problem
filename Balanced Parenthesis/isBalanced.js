// Given a string, return true if it contains balanced parenthesis ().

// Examples
// Input	Output
// string:
// "(x + y) - (4)"	true
// string:
// "(((10 ) ()) ((?)(:)))"	true
// string:
// "(50)("	false
// string:
// ""	true
function isBalanced(string) {
    var arr = string.split("")
    var arr1 = []
    var arr2 = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "(") {
            arr1.push("(")
        }
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === ")") {
            arr2.push(")")
        }
    }
    if (arr1.length === 1 || arr2.length === 1) {
        return false
    }
    else if (arr1.length !== arr2.length) {
        return false
    }
    else if (arr[0] === ")") {
        return false
    }
    return true
}