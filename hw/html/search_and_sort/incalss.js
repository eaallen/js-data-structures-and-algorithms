let num = '12341231223'

function _parseInt(str) {
    let number = 0
    for (let i = 0; i < str.length; i++) {
        let num
        switch (str[i]) {
            case '0':
                num = 0
                break
            case '1':
                num = 1
                break
            case '2':
                num = 2
                break
            case '3':
                num = 3
                break
            case '4':
                num = 4
                break
            case '5':
                num = 5
                break
            case '6':
                num = 6
                break
            case '7':
                num = 7
                break
            case '8':
                num = 8
                break
            case '9':
                num = 9
                break
        }
        let m = 10**(str.length-1 - i)
        number += num * m
    }
    console.log(number)
    return number
}
_parseInt(num)