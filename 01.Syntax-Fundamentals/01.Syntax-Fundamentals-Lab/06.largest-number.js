function solve(a,b,c) {
    let result = ''

    if (a > b) {
        if (a > c) {
            result = a
        } else {
            result = c
        }
    } else if (b > c){
        result = b
    } else {
        result = c
    }

    console.log(`The largest number is ${result}.`)

}

solve(11,9,11)