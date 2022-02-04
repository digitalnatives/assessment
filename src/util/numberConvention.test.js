import convertToArabic from "./numberConvertion";

test("Below 5 digit", ()=>{
    const oneDigit = convertToArabic("7");
    expect(oneDigit).toBe("seven");

    const twoDigit = convertToArabic("42");
    expect(twoDigit).toBe("forty-two");

    const fourDigit = convertToArabic("1999");
    expect(fourDigit).toBe("one thousand nine hundred and ninety-nine");

    const fourDigitWithZeros = convertToArabic("2001");
    expect(fourDigitWithZeros).toBe("two thousand and one");


})

test("Above five digit", ()=>{
    const fiveDigit = convertToArabic("17999");
    expect(fiveDigit).toBe("seventeen thousand nine hundred and ninety-nine");

    const sixDigit = convertToArabic("342251");
    expect(sixDigit).toBe("three hundred and forty-two thousand two hundred and fifty-one");

    const sevenDigit = convertToArabic("1300420");
    expect(sevenDigit).toBe("one million three hundred thousand four hundred and twenty");
})