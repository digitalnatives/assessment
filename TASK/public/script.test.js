const process = require("./script");

test("Processing ...", () =>   {
    expect(process(1)).toBe("one");
});