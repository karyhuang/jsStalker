var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var age = prompt("How old are you?");

var fullName = firstName + " " + lastName;
var daysLived = age * 365.25; 
// use 365.25 instead of 365 to account for leap years 
alert("Nice to meet you, " + fullName);
alert("You have lived approximately " + daysLived + " days");
console.log("I know you are " + age + " years old, " + firstName + "!");