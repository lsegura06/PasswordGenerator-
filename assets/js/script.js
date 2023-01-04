// Assignment code here


// Get references to the #generate element
const generateBtn = document.querySelector("#generate");
const numbers = [0,1,2,3,4,5,6,7,8,9]
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const specChar = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","|","}","~"]

function generatePassword() {
  let password = ''
  let storePass = []
    // prompt the user for the password criteria
    let passLength = prompt("How many characters would you like your password to contain?");

    // a. password length 8 > 128

    if (passLength < 8 || passLength > 128 ) {
        passAlert = alert("Password must be in between 8 and 128 characters long");
        console.log("False")
        generatePassword();
      }

    else {
    // b. lowercase, uppercase, numbers, special characters

    passSpec = confirm("Click OK to confirm including special characters");
    passNum = confirm("Click OK to confirm including numeric characters");
    passLo = confirm("Click OK to confirm including lowercase characters");
    passUp = confirm("Click OK to confirm including uppercase characters");

    }

    // validate the input


    // if all were clicked ok, combines all the arrays 
    if (passUp === true && passLo === true && passNum === true && passSpec === true) {
      storePass = upperCase.concat(lowerCase, numbers, specChar)
      
      // if specChar wasnt clicked ok, combines the other 3 only
      }else if (passUp === true && passLo === true && passNum === true && passSpec === false) {
        storePass = upperCase.concat(lowerCase, numbers)
  
        // if only Upper and Lower case were clicked ok, combined only those two
      }else if (passUp === true && passLo === true && passNum === false && passSpec === false) {
        storePass = upperCase.concat(lowerCase)
  
        // if only uppercase was clicked ok, only uppercase
      }else if (passUp === true && passLo === false && passNum === false && passSpec === false) {
        storePass = upperCase
  
        //if only uppcase was not clicked ok, combined the other 3
      }else if (passUp === false && passLo === true && passNum === true && passSpec === true) {
        storePass = lowerCase.concat(numbers, specChar)
  
        // if only numbers and specchar were clicked ok, combine only those 2
      }else if (passUp === false && passLo === false && passNum === true && passSpec === true) {
        storePass = numbers.concat(specChar)
  
        // if only specchar were clicked ok, only specchar
      }else if (passUp === false && passLo === false && passNum === false && passSpec === true) {
        storePass = specChar

        // if only uppercase, number, specchar were clicked ok, only combined uppercase and numbers and specchar
      }else if (passUp === true && passLo === false && passNum === true && passSpec === true) {
        storePass = upperCase.concat(numbers, specChar)
  
        // if only uppercase and specChar were clicked ok, only combined uppercase and specchar
      }else if (passUp === true && passLo === false && passNum === false && passSpec === true) {
        storePass = upperCase.concat(specChar)
  
        // if only uppercase and number were clicked ok, only combined uppercase and number
      }else if (passUp === true && passLo === false && passNum === true && passSpec === false) {
        storePass = upperCase.concat(numbers)
  
        // if only lowercase nad number were clicked ok, only combined lowercase and numbers
      }else if (passUp === false && passLo === true && passNum === true && passSpec === false) {
        storePass = lowerCase.concat(numbers)
  
        //if only lowercase and specchar were clicked ok, only combined lowercase and specchar
      }else if (passUp === false && passLo === true && passNum === false && passSpec === true) {
        storePass = lowerCase.concat(specChar)
  
        //if only lowercase was clicked ok, only lowercase
      }else if (passUp === false && passLo === true && passNum === false && passSpec === false) {
        storePass = lowerCase
  
        //if only number was clicked ok, only number
      }else if (passUp === false && passLo === false && passNum === true && passSpec ===false) {
        storePass = numbers
  
        //if only specchar was clicked ok, only specchar
      } else if (passUp === false && passLo === false && passNum === false && passSpec === true) {
        storePass = specChar
  

      }else {
  
        //if none were clicked ok
        password = ''
        storePass = []
        passAlert = alert("You must select at least one criteria.")
        return;
      }
  
    

    // generate password based on the ok's
    for (i=0; i < passLength; i += 1) {
      const randomIndex = Math.floor(Math.random() *storePass.length); 
      password += storePass[randomIndex];
    }
    
    // display password to the page
    return password;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);