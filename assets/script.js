// Create Arrays for Special Characters, Numbers, lowerCase & upperCase
var specialCharacters = [ 
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
];

var numbers = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
];

var lowerCase = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

var upperCase =[
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

// Create Function to prompt the user for the password options
    // Check if password length is a number. Return if false.
    // Check if password length is at least 8 characters long. Prompts return if false.
    // Check if password length is less than 128 characters long. Prompts return if false.
    // Store boolean to confirm if user wants Special Characters, numbers, lowercase, uppercase. 
    //Check if user does not include any types, the generator will return only if all variables are false.
    // Create an object for the user's input
function Options() {
    var length = parseInt(
        prompt('how many characters would you like your password to contain? Must be between 8-128 characters.')
    );

    if (isNaN(length === true)) {
        alert('Password length must be provided as a number');
        return;
    }

    if (length < 8) {
        alert('Password length must be at least 8 characters long')
        return;
    }

    if (length > 128) {
        alert('Password length must be less than 129 chracters')
        return;
    }

    var includesSpecialCharacters = confirm('Click OK to add Special Characters');
    var includesNumbers = confirm('Click OK to add Numbers');
    var includeslowerCase = confirm('Click OK to add lower-cased Characters');
    var includesupperCase = confirm('Click OK to add upper-cased Characters');

    if (
        includesSpecialCharacters === false &&
        includesNumbers === false &&
        includeslowerCase === false &&
        includesupperCase === false
    ) {
        alert('Must choose at least one character option')
        return;
    }

    var selectedOptions = {
        length: length,
        includesSpecialCharacters: includesSpecialCharacters,
        includesNumbers: includesNumbers,
        includeslowerCase: includeslowerCase,
        includesupperCase: includesupperCase,
    };

    return selectedOptions;
}


// Gets random element from an array.
function getRandom(array) {
    var randIndex = Math.floor(Math.random()* array.length);
    var randElement = array[randIndex];

    return randElement;
}

// Generate the password with user's inputs
    // array password result
    // array types of characters in the result
    // array for selected characters
    // Add array of Special/number/lower/upper Characters into total characters. Push new random character to selectedCharacters
    // for loop to use password length from the options object. Selects random from the possible characters. Pushing to the result.
    // needs to use at least 1 of each selected character.
    // change to string and write to password. 
function generatePassword() {
    var selected = Options();
    var result = [];
    var allCharacters = [];
    var selectedCharacters = [];

    if (selected.includesSpecialCharacters) {
        allCharacters = allCharacters.concat(specialCharacters);
        selectedCharacters.push(getRandom(specialCharacters));
    }

    if (selected.includesNumbers) {
        allCharacters = allCharacters.concat(numbers);
        selectedCharacters.push(getRandom(numbers));
    }

    if (selected.includeslowerCase) {
        allCharacters = allCharacters.concat(lowerCase);
        selectedCharacters.push(getRandom(lowerCase));
    }

    if (selected.includesupperCase) {
        allCharacters = allCharacters.concat(upperCase);
        selectedCharacters.push(getRandom(upperCase));
    }

    for (var i = 0; i <selected.length; i++) {
        var allCharacters = getRandom(allCharacters);
        result.push(allCharacters);
    }
    
    for (var i=0; i < selectedCharacters.length; i++) {
        result[i] = selectedCharacters[i];
    }

    return result.join('');
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



