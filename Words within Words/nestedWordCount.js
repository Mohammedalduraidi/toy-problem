// Given an array of unique words, find the word that contains the greatest number of other words. A word must be at least two letters long.

// Examples
// Input	Output
// wordList:
// [ "gray", "grays", "ray", "rays", "strays" ]	"grays"
function nestedWordCount(wordList) {

    var greatest = 0
    var saveValue;
    var counter = 0
    for (var i = 0; i < wordList.length; i++) {
        counter = 0
        for (var j = 0; j < wordList.length; j++) {
            if (wordList[i].match(wordList[j])) {
                counter++

            }
            if (greatest < counter) {
                greatest = counter
                saveValue = wordList[i]

            }
        }
    }
    return saveValue
}