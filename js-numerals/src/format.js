var simples = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tenses = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function convertNumberToText(number, delimiter = '') {
    function calculateNextNumber(currentNumber, substracter) {
        return currentNumber - substracter;
    }

    function setResultFromSimples(simplesindex, decimalName) {
        return simples[simplesindex] + ' '+ decimalName;
    }

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
       result = delimiter + numberText; 
    } else if (numberInt >= 20 && numberInt <= 99) {
        var tenseNumber = Math.trunc(numberInt / 10);
        var tenseText = tenses[tenseNumber - 2];
        nextNumber = calculateNextNumber(numberInt, tenseNumber * 10);
        result = delimiter + tenseText + convertNumberToText(String(nextNumber) , '-');
    } else if (numberInt >= 100 && numberInt <= 1999) {
        var hundred = Math.trunc(numberInt / 100);
        nextNumber = calculateNextNumber(numberInt, hundred * 100);
        result = setResultFromSimples(hundred - 1, 'hundred ') + convertNumberToText(String(nextNumber), 'and ');
    } else if (numberInt === 2000) {
        return 'two thousand';
    } else if (numberInt >= 2001 && numberInt <= 99999) {
        var thousand = Math.trunc(numberInt / 1000);
        nextNumber = calculateNextNumber(numberInt, thousand * 1000);
        result = setResultFromSimples(thousand - 1, 'thousand ') + convertNumberToText(String(nextNumber), 'and ');
    } else {
        return 'Error: Your given number is not supported to translate. Please give a number between 1 - 99999';
    }
    return result;
}