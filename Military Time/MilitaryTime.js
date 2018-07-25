// Given a string that represents time in hours and minutes, convert the string to military time (if necessary).

// Examples
// Input	Output
// time:
// "3:00pm"	"15:00"
// time:
// "9:15am"	"09:15"
// time:
// "12:00am"	"00:00"
// time:
// "04:00"	"04:00"

function toMilitary(time) {
    var result = ""
    if (time.split(":")[1][2] === "a" || !time.split(":")[1][2]) {
        if (time.split(":")[0].length === 2) {
            if (time.split(":")[0] !== "12") {
                result += time.split(":")[0] + ":" + time.split(":")[1][0] + time.split(":")[1][1]
            } else {
                result += "00" + ":" + time.split(":")[1][0] + time.split(":")[1][1]
            }
        } else {
            result += "0" + time.split(":")[0] + ":" + time.split(":")[1][0] + time.split(":")[1][1]
        }
    } else {
        var x = parseInt(time.split(":")[0]) + 12
        if (x === 24) {
            result += "12" + ":" + time.split(":")[1][0] + time.split(":")[1][1]
        } else {
            result += x.toString() + ":" + time.split(":")[1][0] + time.split(":")[1][1]
        }
    }
    return result
}




  // i: string
    //o: string
    //c:no c
    //e: the am and pm issue and 00 if it a number

    //creat result varible as a string
    //then i need to split the string by ":"
    //then i need to check if it am or pm
    //if it am i need keep right side of the string and remove am
    // if its pm, then i need to remove the pm from the right side and convert string to number 
    //and add 12 to the number in the left side and return it to the string
    // then i need to check if the length of left element , if equal 2 put them directly in the result
    //if equal one, wee add 0 to left the elem and put them in the result 
    // return result and thank you! <3