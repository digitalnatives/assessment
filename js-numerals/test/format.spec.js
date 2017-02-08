describe('convertNumberToText tests', function() {
    it("should returns and error message when number parameter not valid", function() {
        var result = convertNumberToText('hello');
        var expectedErrorMessage = 'Error: the given parameter is not a number';

        expect(result).toEqual(expectedErrorMessage);
    });

    it('should not get error message when we get set a number as parameter', function() {
        var expectedErrorMessage = 'Error: the given parameter is not a number';
        var result1 = convertNumberToText('1000');
        var result2 = convertNumberToText('1 000');
        var result3 = convertNumberToText('1   000');
        expect(result1).not.toEqual(expectedErrorMessage);
        expect(result2).not.toEqual(expectedErrorMessage);
        expect(result2).not.toEqual(expectedErrorMessage);
    });

    it('should return seven when the given number is 7', function() {
        var expectedResult = 'seven';
        var result = convertNumberToText('7').trim();
        expect(result).toEqual(expectedResult);
    });

    it('should return forty-two when the given number is 42', function() {
        var expectedResult = 'forty-two';
        var result = convertNumberToText('42').trim();
        expect(result).toEqual(expectedResult);
    });

    it('should return two hundred when the given number is 200', function() {
        var expectedResult = 'two hundred';
        var result = convertNumberToText('200').trim();
        expect(result).toEqual(expectedResult);
    });

    it('should return one hundred and forty-two when the given number is 142', function() {
        var expectedResult = 'one hundred and forty-two';
        var result = convertNumberToText('142').trim();
        expect(result).toEqual(expectedResult);
    });

    it('should return nineteen hundred and ninety-nine when the given number is 1999', function() {
        var expectedResult = 'nineteen hundred and ninety-nine';
        var result = convertNumberToText('1999').trim();
        expect(result).toEqual(expectedResult);
    });

    it('should return two thousand when the given number is 2000', function() {
        var expectedResult = 'two thousand';
        var result = convertNumberToText('2000').trim();
        expect(result).toEqual(expectedResult);
    });

    it('should return two thousand and one when the given number is 2001', function() {
        var expectedResult = 'two thousand and one';
        var result = convertNumberToText('2001').trim();
        expect(result).toEqual(expectedResult);
    });

    it('should return two thousand five hundred when the given number is 2500', function() {
        var expectedResult = 'two thousand five hundred';
        var result = convertNumberToText('2500').trim();
        expect(result).toEqual(expectedResult);
    });

    it('should return Error message when you give a not supported number', function() {
        var expectedResult = 'Error: Your given number is not supported to translate. Please give a number between 1 - 99999';
        var result = convertNumberToText('200100');
        expect(result).toEqual(expectedResult);
    });
});