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

  summary('Error messages can be thrown', function() {
      it("Will throw error if the argument is NaN", function() {
        var s = function() {
          new Square("Simon")
        }
        expectError(s, "argument is not a number");
      })

      it("Will throw error if the number provided is negative", function() {
        var s = function() {
          new Square(-1)
        }
        expectError(s, "size should be a positive number");
      })
    })
  });
