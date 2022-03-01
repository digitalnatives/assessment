import converter from "./script";

test("Conversion test, ", () => {
  const seven = converter("7");
  expect(seven).toBe("seven");

  const fortyTwo = converter("42");
  expect(fortyTwo).toBe("forty-two");

  const oneThousandNineHundred = converter("1999");
  expect(oneThousandNineHundred).toBe(
    "one thousand nine hundred and ninety-nine"
  );

  const twoThousandAndOne = converter("2001");
  expect(twoThousandAndOne).toBe("two thousand and one");

  const seventeenThousandNineHundred = converter("17999");
  expect(seventeenThousandNineHundred).toBe(
    "seventeen thousand nine hundred and ninety-nine"
  );

  const threeHundredAndFortytwoThousand = converter("342251");
  expect(threeHundredAndFortytwoThousand).toBe(
    "three hundred and forty-two thousand two hundred and fifty-one"
  );

  const oneMillionThreeHundredThousand = converter("1300420");
  expect(oneMillionThreeHundredThousand).toBe(
    "one million three hundred thousand four hundred and twenty"
  );
});

console.log(converter(20));
