

// repeat function

function stringRepeat(str, num){

  str = 'I am awesome. '
  var num = prompt("Give me a number of times you want this string repeated");
  if (num>=0){
    return str.repeat(num);
  }
}
