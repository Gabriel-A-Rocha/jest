// the parameter 'done' is required to test the callback
// done() and done(error) will signal Jest the async call is complete

test("the data is peanut butter", (done) => {
  //function to be tested
  function fetchData(cb) {
    return cb("peanut butter");
  }

  function callback(data) {
    try {
      expect(data).toBe("peanut butter");
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});

// different from other tests, the expect() statement lies inside the callback
