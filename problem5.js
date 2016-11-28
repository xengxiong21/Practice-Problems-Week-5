
/*
  This sorts the numbers from lowest to highest,
  seperating them with a comma
*/

function numberSort(){

  // Asks user for numbers
  var num1 = Number(prompt("Give me a number"));
  var num2 = Number(prompt("Give me a second number"));
  var num3 = Number(prompt("Give me a third number"));

  // Number 1 is lowest
  if(num1 <= num2 && num1 <= num3){
    if(num2 <= num3){
      document.write(num1 + "," + num2 +"," + num3);
    }else if(num3 <=  num2){
      document.write(num1 + "," + num3 + "," + num2);
    }
  }

  // Number 2 is lowest
  else if(num2 <= num1 && num2 <= num3){
    if(num1 <= num3){
      document.write(num2 + "," + num1 + "," + num3);
    }else if(num3 <= num1){
      document.write(num2 + "," + num3 + "," + num1);
    }
  }

  // Number 3 is lowest
  else if(num3 <= num1 && num3 <= num2){
    if(num1 <= num2){
      document.write(num3 + "," + num1 + "," + num2);
    }else if(num2 <= num1);
      document.write(num3 + "," + num2 + "," + num1);
  }
}
