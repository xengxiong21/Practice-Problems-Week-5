alert("This will see if your string you enter is a palidrome or not.");

function palidrome(){
  var userString = prompt("Give me a string");
  var newString = userString.split("").reverse().join("");

  if(userString === newString){
    document.write("Your string \" " + newString + "\" is a palidrome")
  }
  else {
    document.write("Your string \"" + newString + "\" is not a palidrome")
  }
}
