const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(objects){
  let record = objects.find(object => object.result == "W" )
  if(record){
    return record.year
  }else{
    return undefined
  }
}
