
// generates array from the low number to the high number of the ASCII character codes.
const arrayFromLowToHighNum = (low, high) => {
    const array = [];
    for (let i = low; i <= high; i++) {
      array.push(i);
    }
    return array;
  };
//   Creating Arrays for Character Codes from ASCII Codes.
  const UPPERCASE_CODES = arrayFromLowToHighNum(65, 90);
  const LOWERCASE_CODES = arrayFromLowToHighNum(97, 122);
  const NUMBER_CODES = arrayFromLowToHighNum(48, 57);
  const SYMBOLS_CODES = arrayFromLowToHighNum(33, 47)
    .concat(arrayFromLowToHighNum(58, 64))
    .concat(arrayFromLowToHighNum(91, 96))
    .concat(arrayFromLowToHighNum(123, 126));
  
  // Function to determine password Length
  function generatePassword() {
    var passwordLength = +window.prompt("Choose a password length between 8 & 128")
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("You must enter a password length between 8 and 128 characters.");
      return "";
    }
    // selected variables for the password.
    var lowerCase = window.confirm("Would you like to use lower case characters?");
    var upperCase = window.confirm("Would you like to use upper case characters?");
    var numbers = window.confirm("Would you like to use numbers?");
    var specialCharacters = window.confirm("Would you like special characters?");
  
    // creates character codes array for password to generate using the selected variables from above.
    let charCodes = [];
    if (lowerCase) {
      charCodes = charCodes.concat(LOWERCASE_CODES);
    }
    if (upperCase) {
      charCodes = charCodes.concat(UPPERCASE_CODES);
    }
    if (specialCharacters) {
      charCodes = charCodes.concat(SYMBOLS_CODES);
    }
    if (numbers) {
      charCodes = charCodes.concat(NUMBER_CODES);
    }
    if (charCodes.length === 0) {
      alert("Please choose at least one set of characters");
      return ""
    }
    const passwordCharacters = Array.from({length: passwordLength}, () => {
      const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
      return String.fromCharCode(characterCode);
    })
    return passwordCharacters.join('');
  }
  


    
// Assignment Starter Code Below
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



