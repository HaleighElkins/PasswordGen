// Assignment code here
var generateBtn = document.querySelector("#generate");
// moved var generateBtn to top to organize my own code. 
var passwordLength;
var numberCheck;
var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var uppercaseCheck; 
var lowercaseABE = "abcdefghijklmnopqrstuvwxyz";
var lowercaseCheck;



  // This will be the length of the password critera 
  function determineLength(){
    passwordLength = prompt ("how long the password should be?");

  if (passwordLength<8){
    alert("Password Length much be a number between 8-50 characters.");
  
  }else if (passwordLength>50){
    alert("Password length much be a number between 8-50 characters.");
  
  // }else if no number is prsented
    alert ("Password length much be a number between 8-50 characters.");
  
  }else{
      alert("Next steps")
    }
    return passwordLength;
  }

// This will be for the letters in the password



  function determineUppercase(){
    uppercaseCheck = prompt ("Would you like to use an uppercase letter?");

    if (uppercaseCheck === null || uppercaseCheck === ""){
      alert("Yes or No");
      determineUppercase();

    }else if (uppercaseCheck === "yes" || uppercaseCheck === "y"){
      numberCheck = true;
      return numberCheck;

    }else if (uppercaseCheck === "no" || uppercaseCheck === "n"){
      numberCheck = false;
      return numberCheck;
  
    }else {
      alert("Please answer Yes or No");
      determineUppercase();
    }
    return uppercaseCheck;
  }

  function determineLowercase(){
    lowercaseCheck + prompt ("Would you like to use an lowercase letter?");

    if (lowercaseCheck === null || lowercaseCheck === ""){
      alert("Yes or No");
      determineLowercase();

    }else if (lowercaseCheck === "yes" || lowercaseCheck === "y"){
      numberCheck = true;
      return numberCheck;

    }else if (lowercaseCheck === "no" || lowercaseCheck === "n"){
      numberCheck = false;
      return numberCheck;

    }else {
      alert ("Please answer Yes or No");
      determineLowercase();
    }  
    return lowercaseCheck;
  }

  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Moved to bottom? This is last step 



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

