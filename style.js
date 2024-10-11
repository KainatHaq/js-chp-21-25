//Q#1
//Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName.Greet the user using his full name.

//let firstName = prompt("Enter Your First Name");
//let lastName = prompt("Enter Your Last Name");
//let fullName = firstName + "" + lastName;

//alert("Aslam o Alaikum !" + "" + fullName);

//Q#2
// Prompt the user for their favorite mobile phone model
//let mobileModel = prompt("Please Enter your favorite mobile phone model:");

//let modelLength = mobileModel.length;

//document.write("The length of your favorite mobile phone model is:"  + modelLength + " characters.");
//Q#3
 //Write a program to find the index of letter “n” in the word pakistani
//let word = "Pakistani";

//let index = word.indexOf("n");

//document.write("The index of the letter 'n' in the word 'Pakistani' is: " + index);
//Q#4
//. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser. 
//let sentence = "Hello World";
//let lastIndex = sentence.lastIndexOf("l");

//document.write("The last index of the letter 'l' in the phrase 'Hello World' is: " + lastIndex);
//Q#5
// Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser

//let word = "Pakistani";

//let characterAtIndex3 = word.charAt(3);
//document.getElementById("result").innerHTML = "The character at index 3 in '" + word + "' is: " + characterAtIndex3;


//Q#6
//. Write a program that takes two user inputs for first and
//last name using prompt and merge them in a new variable
//titled fullName. Greet the user using his full name.1 using string concat() method.

//let firstName = prompt("Please Enter your first name:");
//let lastName = prompt("Please Enter your last name:");

//let fullName = firstName.concat(" ", lastName);
//alert("Welcome, " + fullName + "!");
//Q#7
 // var originalWord = "Hyderabad";
 //var replacedWord = originalWord.replace("Hyder", "Islam");

// document.getElementById("result").innerText = "City: " + originalWord +  "  ,After Replacement: " + replacedWord;
//Q#8
//var message = "Ali and Sami are best friends. They play cricket and football together.";

//var replacedMessage = message.replace(/and/g, "&");
//document.getElementById("result").innerText = "Replaced Message: " + replacedMessage;

//Q#9
//Write a program that converts a string “472” to a number
//472. Display the values & types in your browser.
     //var str = "472";
     //var num = Number(str); 
     //var result = document.getElementById("result");result.innerHTML = 
           // "Original String: " + str + " (Type: " + typeof str + ")<br>" +
           // "Converted Number: " + num + " (Type: " + typeof num + ")";

          // Q#10
         // Write a program that takes user input. Convert and
//show the input in capital letters

//function convertToUpper() {
    
    //var input = document.getElementById("userInput").value;

    //var upperCaseInput = input.toUpperCase();
    //document.getElementById("result").innerText = "Uppercase: " + upperCaseInput;
//}

//Q#11
//Write a program that takes user input. Convert and
//show the input in title case.
//function convertToTitleCase() {
   // var input = document.getElementById("userInput").value;

   // var titleCaseInput = input.split(' ').map(function(word) {
  //      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
   // }).join(' ');

   // document.getElementById("result").innerText = "Title Case: " + titleCaseInput;
//}
//Q#12
//Write a program that converts the variable num to
///string.
//var num = 35.36 ;
//Remove the dot to display “3536” display in your browser.
    
      // var num = 35.36;
     //  var numString = num.toString();
        //var resultString = numString.replace(".", ""); 
       // document.getElementById("result").innerText = "Original Number: " + num + "<br>Converted String: " + resultString;

      // Q#13
     // Write a program to take user input and store username
//in a variable. If the username contains any special symbol
//among [@ . , !], prompt the user to enter a valid username.
//For character codes of [@ .
//function validateUsername() {

   // var username = document.getElementById("username").value;
    //var specialChars = ['@', '.', ',', '!'];
    //for (var i = 0; i < specialChars.length; i++) {
       // if (username.includes(specialChars[i])) {
           // document.getElementById("result").innerText = "Invalid username! Please enter a valid username without special symbols: " + specialChars.join(" ");
          //  return; 
       // }
   // }

  //  document.getElementById("result").innerText = "Username '" + username + "' is valid.";
//}
//Q#14
// You have an array
//A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
//Write a program to enable “search by user input” in an
//array. After searching, prompt the user whether the given
//item is found in the list or not.
//Note: Perform case insensitive search. Whether the user
//enters cookie, Cookie, COOKIE or coOkIE, program
//should inform about its availability. Example:
//var A = ["cake", "apple pie", "cookie", "chips", "patties"];

//function searchItem() {
    
   // var userInput = document.getElementById("searchInput").value.toLowerCase();
    //var found = A.some(function(item) {
    //    return item.toLowerCase() === userInput;
    //});

    //var result = document.getElementById("result");
    //if (found) {
        //result.innerText = "Item '" + userInput + "' is found in the list.";
   // } else {
   //     result.innerText = "Item '" + userInput + "' is not found in the list.";
  //  }
//}
//Q#15
//Write a program to take password as an input from
//user. The password must qualify these requirements:
///a. It should contain alphabets and numbers
//b. It should not start with a number
//c. It must at least 6 characters long
//If the password does not meet above requirements,
//prompt the user to enter a valid password.
//For character codes of a-z, A-Z & 0-9, refer to ASCII
//table at the end of this document.
//function validatePassword() {
    
   // var password = document.getElementById("passwordInput").value;

    //var hasAlphabets = /[a-zA-Z]/.test(password);
    //var hasNumbers = /[0-9]/.test(password);
    //var isValidLength = password.length >= 6;
   // var doesNotStartWithNumber = !/^[0-9]/.test(password);

   
   // if (hasAlphabets && hasNumbers && isValidLength && doesNotStartWithNumber) {
      //  document.getElementById("result").innerText = "Password is valid.";
   // } else {
    //    document.getElementById("result").innerText = "Invalid password! Please ensure the password meets the following requirements:\n" +
     //       "- Contains both alphabets and numbers\n" +
     //       "- Does not start with a number\n" +
     //       "- At least 6 characters long";}
   // }
  // Q#16
 // Write a program to convert the following string to an
//array using string split method.
//var university = “University of Karachi”;
//Display the elements of array in your browser.
var university = "University of Karachi";

// Convert the string to an array
var universityArray = university.split(" ");

// Display the elements of the array
var resultDiv = document.getElementById("result");
resultDiv.innerHTML = "<strong>Array Elements:</strong><br>";

universityArray.forEach(function(element) {
    resultDiv.innerHTML += element + "<br>";
});