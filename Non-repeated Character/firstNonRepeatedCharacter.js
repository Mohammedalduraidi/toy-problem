// Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'.

// Examples
// Input	Output
// string:
// "ABCDBIRDUP"	"A"
// string:
// "XXXXXXX"	"sorry"
// string:
// "ALAMABA"	"L"
// string:
// "BABA"	"sorry"


function firstNonRepeatedCharacter(string) {
    // create obj to count charc repetes
    var arr = string.split('');
    var obj = {};
    // iterate over all the elements and count them
    for (var i = 0; i < arr.length; i++) {
        // check if elemnt not exist in obj, create it count 0
        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 0;
        } else {
            obj[arr[i]] = obj[arr[i]] + 1;
        }
    }
    // iterate over obj and return first key of value = 0
    for (var key in obj) {
        if (obj[key] === 0) {
            return key;
        }
    }
    return 'sorry';
}



  // second solution using big O(n^2)

   // var result = "sorry";
    // //iterate over string
    // for(var i = 0 ; i < string.length ; i++) {
    // // create counter to check how many repeted
    // var counter = 0;
    // //take each element and iterate again and check if there reapeted
    //   for(var j = 0 ; j < string.length ; j++) {
    //     // if any repeate, increment counter
    //     if (string[i] === string[j] && i !== j) {
    //       counter++;
    //     }
    //   }
    //   //if no repetes return charc
    //   if(counter === 0) {
    //     return string[i];
    //   }
    // }
    // return result;