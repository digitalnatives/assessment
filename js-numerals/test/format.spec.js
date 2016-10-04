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
});