describe("Square class", function() {
  summary("It has dimensons", function() {
    it("has a length", function() {
      s = new Square(10);
      expectEquality(s.size, 10);
    });
  });

  summary("It has a size",function() {
    it("has an area", function(){
      s = new Square(10);
      expectEquality(s.area(), 100);
    });
  });

  summary("It can throw errors", function() {
    // it("It only works for numbers being input", function() {
    //   k = "cheese"
    //   s = new Square(k);
    //   expectError(s);
    // });

    it("It will not work for negative numbers", function() {
      s = new Square(-1);
      expectError(s);
    });
  });
});
