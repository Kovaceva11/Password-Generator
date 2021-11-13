// Create Arrays for Special Characters, Numbers, lowerCase & upperCase

// Create Function to prompt the user for the password options
    // Check if password length is a number. Return if false.
    // Check if password length is at least 8 characters long. Prompts return if false.
    // Check if password length is less than 128 characters long. Prompts return if false.
    // Store boolean to confirm if user wants Special Characters, numbers, lowercase, uppercase. 
    //Check if user does not include any types, the generator will return only if all variables are false.
    // Create an object for the user's input

// Gets random element from an array.

// Generate the password with user's inputs
    // array password result
    // array types of characters in the result
    // array for selected characters
    // Add array of Special/number/lower/upper Characters into total characters. Push new random character to selectedCharacters
    // for loop to use password length from the options object. Selects random from the possible characters. Pushing to the result.
    // needs to use at least 1 of each selected character.
    // change to string and write to password. 
    
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



