const addField = require("./addField");

test("Add field to an object", () => {
  expect(addField("two")).toEqual({
    one: 1,
    two: 2,
  });
});
