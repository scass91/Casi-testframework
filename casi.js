
//show failing tests

//throw error if possible
//Test failure reasons

function describe(desc, fn) {
  console.log(desc)
  fn()
}

function summary(desc, fn) {
  console.log(desc)
  fn()
}

function it(msg, fn) {
  describe(msg, fn)
}

function expectEquality(provided, output){
  if(provided === output){
    console.log("passed")
  }
  else{
      console.log(`failed - expected ${provided}, instead received ${output}`)
      console.trace()
  }
}

function expectError(condition, errmsg) {
  if (condition) {
    console.log("cheese")
  }
}