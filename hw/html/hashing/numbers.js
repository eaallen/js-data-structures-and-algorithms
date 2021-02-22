// hex (16^0, 16^1, 16^2, ... 16^n)
function decimalToHex(number) {
    console.log('run', number % 16)


}

decimalToHex(123)

// binary (2^0, 2^1, 2^2, ... 2^n)

function decimalbinary(number) {
    let binary = ''
    while (number > 0) {
        let mod = number % 2
        number = Math.floor(number/2)
        binary =  mod + binary 
    }
    console.log(binary)
}
decimalbinary(3214)
// decimal (10^0, 10^1, 10^2, ... 10^n)