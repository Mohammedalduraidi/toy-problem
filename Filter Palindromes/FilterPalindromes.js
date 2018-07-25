// Given an array of words (array of strings), return all words that are palindromes.

function filterPalindromes(words) {
    var check = false
    var results = [];
    for (var i = 0; i < words.length; i++) {
        var length = words[i].length - 1
        for (var j = 0; j < words[i].length; j++) {
            if (words[i][j].toUpperCase() === words[i][length].toUpperCase()) {
                check = true
            } else {
                check = false
            }
            length--
        }
        if (check) {
            results.push(words[i])
        }
    }
    return results
}
