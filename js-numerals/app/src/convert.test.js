import { convert } from "./convert";

test("test singe digit conversion", () => {
  const singleDigit = convert("7");
  expect(singleDigit).toBe("seven");
});

test("test double digits conversion", () => {
  const doubleDigits = convert("42");
  expect(doubleDigits).toBe("forty-two");
});

test("test triple digits conversion", () => {
  const threeDigits = convert("1999");
  expect(threeDigits).toBe("one thousand nine hundred and ninety-nine");
});

test("test four digits conversion", () => {
  const fourDigits = convert("2001");
  expect(fourDigits).toBe("two thousand and one");
});

test("test five digits conversion", () => {
  const fiveDigits = convert("17999");
  expect(fiveDigits).toBe("seventeen thousand nine hundred and ninety-nine");
});

test("test six digits conversion", () => {
  const sixDigits = convert("342251");
  expect(sixDigits).toBe(
    "three hundred and forty-two thousand two hundred and fifty-one"
  );
});

test("test seven digits conversion", () => {
  const sevenDigits = convert("1300420");
  expect(sevenDigits).toBe(
    "one million three hundred thousand four hundred and twenty"
  );
});
