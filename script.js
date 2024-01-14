// Assignment code here
var generateBtn = document.querySelector("#generate");
// moved var generateBtn to top to organize my own code. 
var passwordLength;
var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var uppercaseCheck; 
var specialChar = "!@#$%^&*()+}{[]?/><,.=-_"
var specialCheck;
var numberChar = "1234567890";
var numberCheck;


  // This will be the length of the password critera 
  function determineLength(){
    passwordLength = prompt ("How long would you like your password to be? Please chose between 8-50.");

  if (passwordLength<8){
    alert("Password Length much be a number between 8-50 characters.");
  
  }else if (passwordLength>50){
    alert("Password length much be a number between 8-50 characters.");
  
  // }else if no number is prsented
    alert ("Password length much be a number between 8-50 characters.");
  
  }else{
      alert("Thank you, the next steps will determine what you would like in your password.")
    }
    return passwordLength;
  }

// This will be for for the upper or lowercase letters in the password

  function determineUppercase(){
    uppercaseCheck = prompt ("Would you like to use an Uppercase letter? If you chose No all the letters will be lowercase");

    if (uppercaseCheck === null || uppercaseCheck === ""){
      alert("Yes or No");
      determineUppercase();

    }else if (uppercaseCheck === "yes" || uppercaseCheck === "y"){
      uppercaseCheck = true;
      return uppercaseCheck;

    }else if (uppercaseCheck === "no" || uppercaseCheck === "n"){
      uppercaseCheck = false;
      return uppercaseCheck;
  
    }else {
      alert("Please answer Yes or No");
      determineUppercase();
    }
    return uppercaseCheck;
  }

  // Special Characters
function determineSpecial(){
  specialCheck + prompt ("Would you like to use a special character?(Yes or NO)");
  specialCheck = specialCheck.toLowercase();

  if (specialCheck === null || specialCheck === ""){
    alert ("Yes or No");
    determineSpecial();

  }else if (specialCheck === "yes" || specialCheck === "y"){
    specialCheck = true;
    return specialCheck;

  }else if (specialCheck === "no" || specialCheck === "n"){
    specialCheck = false;
    return specialCheck;

  }else{
    alert ("Please answer Yes or No");
    determineSpecial();
  }
  return specialCheck;
}

  // Numbers in the password

  function determineNumbers(){
    numberCheck + prompt ("Would you like to use a number? (Yes or No");
    numberCheck = numberCheck.toLowercase();

    if (numberCheck === null || numberCheck === ""){
      alert ("Yes or No");
      determineNumbers();

    }else if (numberCheck === "yes" || numberCheck === "y"){
    numberCheck = true;
    return numberCheck;

    }else if (numberCheck === "no" || numberCheck === "n"){
      numberCheck = false;
      return numberCheck;

    }else{
      alert ("Please answer Yes or No");
      determineNumbers();
    }
    return numberCheck;
  }

  // Function to generate the password using the upper code
  function generatePassword(){
    determineLength();
    console.log(passwordLength);
    determineUppercase();
    console.log(uppercaseCheck);
    determineSpecial();
    console.log(specialCheck);
    determineNumbers();
    console.log(numberCheck);
  }


  // Write password to the password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Moved to bottom? This is last step 



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

