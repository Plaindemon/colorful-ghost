// Assignment code here
const characterLength = "";
const letters = "abcdefghijklmnopqrstuvwxyz";
const lettersUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const symbols = '!"#$%&()*+,-./:;<=>?@[]/|^_{}~';
const passwordDisplay = document.getElementById("passwordDisplay");

// Add event listener to generate button
document.querySelector("#generate").addEventListener("click", writePassword);
// console.log(form.lengthValue);
// console.log(lettersUp);
// console.log(numbers);
// console.log(symbols);
// const displayResult = document.getElementById('password');

function getInputValue() {
  // Selecting the input element and get its value
  var lengthValue = document.getElementById("characterLength").value;

  // Displaying the value
  alert(lengthValue);
  return lengthValue;
}

document.getElementById("getLengthResult").innerHTML =
  "Character Length Selected:" + getInputValue();

const form = document.getElementById("type");
// lengthValue.addEventListener('input', getLengthResult)
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const lengthAmount = getInputValue;
  const lowercaseBox = document.getElementById("lowercase").checked;
  const uppercaseBox = document.getElementById("uppercase").checked;
  const numbersBox = document.getElementById("numbers").checked;
  const specialBox = document.getElementById("special").checked;
  console.log(uppercaseBox);
  console.log(lowercaseBox);
  console.log(numbersBox);
  console.log(specialBox);

  const password = generatePassword(
    lengthAmount,
    uppercaseBox,
    lowercaseBox,
    specialBox
  );
  passwordDisplay.innerText = password;
});

console.log(form);

// window.alert to create a window alert to notify user to select password criteria to begin
// window.alert("To generate a password, begin by adjusting the criteria needed for the password");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(lengthAmount, lowercaseBox, uppercaseBox, numbersBox, specialBox) {
  var passwordOptions = [];
  
  if (uppercaseBox === true) {
    passwordOptions = passwordOptions.concat(lettersUp);
  }
  if (lowercaseBox === true) {
    passwordOptions = passwordOptions.concat(lettersUp);
  }
  if (specialBox === true) {
    passwordOptions = passwordOptions.concat(lettersUp);
  }
  if (numbersBox === true) {
    passwordOptions = passwordOptions.concat(lettersUp);
  }
  console.log(passwordOptions);
  if (lengthAmount > 8 && lengthAmount < 138) {
    console.log(lengthAmount);
    alert(" value input success");
  } else {
    alert("needs to be a value between 8 and 138 ");
  }
  const letterResult = []
  for (let i = 0; i < lengthAmount; i++) {
    const characterCode =
      passwordOptions[Math.floor(Math.random() * passwordOptions.length)];
      letterResult.push(String.fromCharCode(characterCode));
  }
  return letterResult.join('')
}


//  generatePassword();
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#passwordDisplay");
  passwordText.value = password;
  console.log(passwordText.value);
  console.log(password);
}


