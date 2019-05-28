const sumition = (num) => {
    let mod = 0;
    let total = 0
    while (num > 0) {
        mod = num % 10
        total = total + mod
        num = num - mod
        num = num / 10
    }
    return total;
}