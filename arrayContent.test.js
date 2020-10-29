const shoppingList = ["diapers", "trash bags", "paper towels"];

test("the shopping list has trash bags on it", () => {
  expect(shoppingList).toContain("trash bags");
});

test("the shopping list does not contain paper", () => {
  expect(shoppingList).not.toContain("paper");
});
