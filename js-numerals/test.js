import converter from "./script";

test("Conversion test, ", () => {
  const singleDigit = converter("7");
  expect(singleDigit).toBe("seven");

  const doubleDigits = converter("42");
  expect(doubleDigits).toBe("forty-two");

  const threeDigits = converter("1999");
  expect(threeDigits).toBe("one thousand nine hundred and ninety-nine");

  const fourDigits = converter("2001");
  expect(fourDigits).toBe("two thousand and one");

  const fiveDigits = converter("17999");
  expect(fiveDigits).toBe("seventeen thousand nine hundred and ninety-nine");

  const sixDigits = converter("342251");
  expect(sixDigits).toBe(
    "three hundred and forty-two thousand two hundred and fifty-one"
  );

  const sevenDigits = converter("1300420");
  expect(sevenDigits).toBe(
    "one million three hundred thousand four hundred and twenty"
  );
});

console.log(converter(20));
