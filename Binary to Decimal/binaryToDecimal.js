function binaryToDecimal(n) {
    var num = n.split("");
    var alo = num.reverse();
    var save = 0

    for (var i = 0; i < alo.length; i++) {
        save += parseInt(alo[i]) * Math.pow(2, i)
        console.log("alo alo", alo[i])
    }
    return save
}

