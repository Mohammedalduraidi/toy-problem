// Write a function that, given two objects, returns whether or not the two are deeply 
//equivalent–meaning the structure of the two objects is the same, and so is the 
//structure of each of their corresponding descendants.

// DO NOT use JSON.stringify

deepEquals = function (a, b) {
    var obj = Object.keys(a).length;
    var obj1 = Object.keys(b).length;

    if (obj !== obj1) {
        return false
    }
    if (!Array.isArray(a) && Array.isArray(b)) {
        return false
    }
    for (var key in a) {
        if (typeof a[key] === 'object' && typeof b[key] === 'object') {
            return deepEquals(a[key], b[key])
        } else if (a[key] !== b[key]) {
            return false
        } else if (b.hasOwnProperty(key) === false) {
            return false
        }
    }

    return true
}