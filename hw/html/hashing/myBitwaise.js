let old = 1
let wise = 100
let n = old ^ wise
let b = decToBin(n)
console.log(decToBin(old))
console.log(decToBin(wise))
console.log(b)
console.log(binaryToDecimal(b))



function decToBin(number) {
    var binary = "";
    var temp = number;

    //while(temp > 0){
    for (i = 1; i <= 16; i++) {
        if (temp % 2 == 0) {
            binary = "0" + binary;
        }
        else {
            binary = "1" + binary;
        }

        temp = Math.floor(temp / 2);
    }

    return binary;
}

function binaryToDecimal(str) {
    let dec = parseInt(str[str.length - 1])
    let multi = 2
    for (let i = str.length - 2; i >= 0; i--) {
        dec += parseInt(str[i]) * multi
        multi *= 2
    }
    return dec
}


function decToHex(num) {
    let str = ''
    let lookup = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
    while (num >= 1) {
        let mod = num % 16
        str = lookup[mod] + str
        num = Math.floor(num / 16)
    }
    return '0x' + str
}

console.log(decToHex(3021))