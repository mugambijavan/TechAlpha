const lengthInput = document.getElementById('length');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateButton = document.getElementById('generate');
const passwordInput = document.getElementById('password');

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?";

function generatePassword() {
  let characterPool = "";
  if (uppercaseCheckbox.checked) characterPool += uppercaseChars;
  if (lowercaseCheckbox.checked) characterPool += lowercaseChars;
  if (numbersCheckbox.checked) characterPool += numberChars;
  if (symbolsCheckbox.checked) characterPool += symbolChars;

  if (characterPool === "") {
    alert("Please select at least one character type!");
    return;
  }

  const passwordLength = parseInt(lengthInput.value);
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += characterPool.charAt(Math.floor(Math.random() * characterPool.length));
  }

  passwordInput.value = password;
}

generateButton.addEventListener('click', generatePassword);
