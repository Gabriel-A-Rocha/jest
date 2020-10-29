test("there is no g in Gabriel", () => {
  //the regex verification is case sensitive
  expect("Gabriel").not.toMatch(/g/);
});

test("there is G in Gabriel", () => {
  expect("Gabriel").toMatch(/G/);
});

test("there is bri in Gabriel", () => {
  expect("Gabriel").toMatch(/bri/);
});
