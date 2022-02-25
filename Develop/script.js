// Assignment code here

const letters = "abcdefghijklmnopqrstuvwxyz";
const lettersUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const symbols = '!"#$%&()*+,-./:;<=>?@[]/|^_{}~';
const characterLength = "";

const passwordDisplay = document.getElementById("passwordDisplay");
// Add event listener to generate button
document.querySelector("#generate").addEventListener("click", writePassword);

console.log(letters);
console.log(lettersUp);
console.log(numbers);
console.log(symbols);

function getInputValue() {
  // Selecting the input element and get its value
  var lengthValue = document.getElementById("characterLength").value;

  // Displaying the value
  // alert(lengthValue);
  return lengthValue;
}

// document.getElementById("getLengthResult").innerHTML =
//   "Character Length Selected:" + getInputValue();

// window.alert to create a window alert to notify user to select password criteria to begin
// window.alert("To generate a password, begin by adjusting the criteria needed for the password");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordOptions = "";
  const form = document.getElementById("type");
  // lengthValue.addEventListener('input', getLengthResult)
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  const inputAmount = getInputValue();
  const lowercaseBox = document.getElementById("lowercase").checked;
  const uppercaseBox = document.getElementById("uppercase").checked;
  const numbersBox = document.getElementById("numbers").checked;
  const specialBox = document.getElementById("special").checked;
  console.log(uppercaseBox);
  console.log(lowercaseBox);
  console.log(numbersBox);
  console.log(specialBox);

  // passwordDisplay.innerText = password;
  if (uppercaseBox === true) {
    passwordOptions = passwordOptions.concat(letters);
  }
  if (lowercaseBox === true) {
    passwordOptions = passwordOptions.concat(lettersUp);
  }
  if (specialBox === true) {
    passwordOptions = passwordOptions.concat(numbers);
  }
  if (numbersBox === true) {
    passwordOptions = passwordOptions.concat(symbols);
  }
  console.log(passwordOptions);
  if (inputAmount > 8 && inputAmount < 138) {
    console.log(inputAmount);
    var letterResult = [];
    for (let i = 0; i < inputAmount; i++) {

      letterResult = letterResult + passwordOptions[Math.floor(Math.random() * passwordOptions.length)];
        // letterResult.push(String.fromCharCode(charCode));
    }
    console.log(letterResult);

    alert(" value input success");

    return letterResult;
  } else {
    alert("needs to be a value between 8 and 138 ");
  }

  // console.log(charCode);
}

//  generatePassword();
// Write password to the #password input
function writePassword() {
  var passwordGenerate = generatePassword();
  var passwordText = document.querySelector("#passwordDisplay");
  passwordText.value = passwordGenerate;
  console.log(passwordText.value);
  console.log(passwordGenerate);
}
