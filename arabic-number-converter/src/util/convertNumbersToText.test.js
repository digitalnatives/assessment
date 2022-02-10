import convertToSentence from "./convertNumbersToText";

test("One digit", ()=> {
    const zero = convertToSentence("0");
    expect(zero).toBe("zero");

    const two = convertToSentence("2");
    expect(two).toBe("two");

    const five = convertToSentence("5");
    expect(five).toBe("five");

    const seven = convertToSentence("7");
    expect(seven).toBe("seven");
})

test("Two digit", ()=> {
    const ten = convertToSentence("10");
    expect(ten).toBe("ten");

    const nineteen = convertToSentence("19");
    expect(nineteen).toBe("nineteen");

    const fortyTwo = convertToSentence("42");
    expect(fortyTwo).toBe("forty-two");

    const seventy = convertToSentence("70");
    expect(seventy).toBe("seventy");
})

test("Three digit", ()=> {
    const hundred = convertToSentence("100");
    expect(hundred).toBe("one hundred");

    const twoHundredAndTwo = convertToSentence("202");
    expect(twoHundredAndTwo).toBe("two hundred and two");

    const fiveHundredAndFifty = convertToSentence("550");
    expect(fiveHundredAndFifty).toBe("five hundred and fifty");

    const sevenHundredAndEightyNine = convertToSentence("789");
    expect(sevenHundredAndEightyNine).toBe("seven hundred and eighty-nine");
})

test("Above three and below seven digit", ()=> {
    const thousand = convertToSentence("1000");
    expect(thousand).toBe("one thousand");

    const oneNineNineNine = convertToSentence("1999");
    expect(oneNineNineNine).toBe("one thousand nine hundred and ninety-nine");

    const twoZeroZeroOne = convertToSentence("2001");
    expect(twoZeroZeroOne).toBe("two thousand and one");

    const oneSevenNineNineNine = convertToSentence("17999");
    expect(oneSevenNineNineNine).toBe("seventeen thousand nine hundred and ninety-nine");

    const threeFourTwoTwoFiveOne = convertToSentence("342251");
    expect(threeFourTwoTwoFiveOne).toBe("three hundred and forty-two thousand two hundred and fifty-one");

    const oneThreeZeroZeroFourTwoZero = convertToSentence("1300420");
    expect(oneThreeZeroZeroFourTwoZero).toBe("one million three hundred thousand four hundred and twenty");
})

test("Above seven digit", ()=> {
    const tenMillion = convertToSentence("10000000");
    expect(tenMillion).toBe("ten million");

    const oneHundredMillionAndOne = convertToSentence("100000001");
    expect(oneHundredMillionAndOne).toBe("one hundred million and one");

    const largeAndComplexNumber = convertToSentence("5320489716");
    expect(largeAndComplexNumber).toBe("five billion three hundred and twenty million four hundred and eighty-nine thousand seven hundred and sixteen");
})

