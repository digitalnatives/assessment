const numToWords = (num) => {
    let units = ['', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty',
        'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let thousands = ['', 'thousand', 'million', 'billion', 'trillion'];
    let str = "";
    if (num === 0) {
        return 0;
    }
    else if (num < 20) {
        str = units[num];
        return str;
    }
    else if (num >= 20 && num < 100) {
        str = tens[parseInt(num / 10)] + '-' + units[num % 10]
        return str;
    }
}
const convert = (num1) => {
    let str1 = "";
    if (num1 < 100) {
        str1 = numToWords(num1)
    }
    else if (num1 >= 100 && num1 < 1000) {
        str1 = numToWords(parseInt(num1 / 100)) + " " + "Hundred and" + " " + convert(num1 % 100);
        return str1;
    }
    else if (num1 >= 1000 && num1 < 100000) {
        str1 = numToWords(parseInt(num1 / 1000)) + " " + "Thousand " + " " + convert(num1 % 1000);
        return str1;
    }
    return str1;
}
console.log(convert(6));
console.log(convert(61));
console.log(convert(78));
console.log(convert(665));
console.log(convert(500));
console.log(convert(2001));
console.log(convert(2561));
console.log(convert(1991));
console.log(convert(17999));
