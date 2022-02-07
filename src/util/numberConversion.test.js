import convertToText from "./numberConversion";

test("Below 5 digit", ()=>{
    const oneDigit = convertToText("7");
    expect(oneDigit).toBe("seven");

    const twoDigit = convertToText("42");
    expect(twoDigit).toBe("forty-two");

    const fourDigit = convertToText("1999");
    expect(fourDigit).toBe("one thousand nine hundred and ninety-nine");

    const fourDigitWithZeros = convertToText("2001");
    expect(fourDigitWithZeros).toBe("two thousand and one");


})

test("Above five digit", ()=>{
    const fiveDigit = convertToText("17999");
    expect(fiveDigit).toBe("seventeen thousand nine hundred and ninety-nine");

    const sixDigit = convertToText("342251");
    expect(sixDigit).toBe("three hundred and forty-two thousand two hundred and fifty-one");

    const sevenDigit = convertToText("1300420");
    expect(sevenDigit).toBe("one million three hundred thousand four hundred and twenty");
})