function compileAndroidCode() {
  throw new Error("You are using the wrong JDK");
}

test("compiling Android code generates an error", () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow("You are using the wrong JDK");
  expect(() => compileAndroidCode()).toThrow(/wrong JDK/);
});
