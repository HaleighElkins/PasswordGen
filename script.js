// Assignment code here
var passwordLength;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  function determineLength(){
    passwordLength = prompt ("how long the password should be?");
  // legnth of password? 8-50?
  if (passwordLength<8){
    alert("Password Length much be a number between 8-? characters.");
  
  }else if (passwordLength>50){
    alert("Password length much be a number between 8-? characters.");
  
  // }else if no number is prsented
    alert ("Password length much be a number between 8-? characters.");
  
  }else{
      alert("Next steps")
    }
    return passwordLength;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

