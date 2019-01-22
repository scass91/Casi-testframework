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
    console.log("%cpassed", "color: green")
  }
  else{
      console.log(`%cfailed - expected ${provided}, instead received ${output}`, "color : red")
      console.trace()
  }
}

function expectError(provided, output){
  var errMsg
  try {
    provided()
  }
  catch(err) {
    errMsg = err.message;
  }
  if(errMsg == output) {
    console.log('   %cpassed', "color: green");
  } else {
    console.log(`   %cfailed expected ${output} got ${errMsg}`, "color: red")
  }
}
