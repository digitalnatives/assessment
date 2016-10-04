function convertNumberToText(number) {
    var number = number.replace(/\s/g, '');
    if(isNaN(number)) {
        return 'Error: the given parameter is not a number';
    }
}