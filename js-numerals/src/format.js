var simples = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tenses = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function convertNumberToText(number, delimiter = '') {
    var number = number.replace(/\s/g, '');
    var result = '';
    if(isNaN(number)) {
        return 'Error: the given parameter is not a number';
    }

    var numberInt = parseInt(number);
    if(numberInt == 0) 
    {
        return '';
    }
    var nextNumber = 0
    if(numberInt >=1 && numberInt <= 19) {
       var numberText = simples[numberInt - 1];
       return result += delimiter + numberText + convertNumberToText('0'); 
    } else if (numberInt >= 20 && numberInt <= 99) {
        var tenseNumber = Math.trunc(numberInt / 10);
        var tenseText = tenses[tenseNumber - 2];
        nextNumber = numberInt - (tenseNumber * 10);
        return result += delimiter + tenseText + convertNumberToText(String(nextNumber) , '-');
    } else if (numberInt >= 100 && numberInt <= 1999) {
        var hundred = Math.trunc(numberInt / 100);
        nextNumber = numberInt - (hundred * 100);
        return result += simples[hundred - 1] + ' hundred' + convertNumberToText(String(nextNumber), ' and ');
    } else if (numberInt === 2000) {
        return 'two thousand';
    } else if (numberInt >= 2001 && numberInt <= 99999) {
        var thousand = Math.trunc(numberInt / 1000);
        nextNumber = numberInt - (thousand * 1000);
        return result += simples[thousand - 1] + ' thousand' + convertNumberToText(String(nextNumber), ' and ');
    }

    return 'Error: Your given number is not supported to translate. Please give a number between 1 - 99999';
}