// 1. Declare an empty array using JS literal notation to store student names in future.

var studentArr = [];

//2. Declare an empty array using JS object notation to store student names in future.

var student = new Array();

// 3. Declare and initialize a strings array.

var myStr = ["maheen", "hareem", "hiba", "hina"];

// 4. Declare and initialize a numbers array.

var myNum = [4, 5, 6, 7, 8, 9];

// 5. Declare and initialize a boolean array.

var myBoolean = [true, false];

// 6. Declare and initialize a mixed array.

var myArr = ["maheen", "hareem", false, 5, 6, 7];

// 7. Declare and Initialize an array and store available education qualifications in Pakistan
// (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD).
// Show the listed qualifications in your browser like:

var edu = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M.Phil", "Phd"];

document.write(
  "<h1>Educations:</h1><ol><li>" +
    edu[0] +
    "</li><li>" +
    edu[1] +
    "</li><li>" +
    edu[2] +
    "</li><li>" +
    edu[3] +
    "</li><li>" +
    edu[4] +
    "</li><li>" +
    edu[5] +
    "</li><li>" +
    edu[6] +
    "</li><li>" +
    edu[7] +
    "</li></ol>"
);

// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students.
// Assume that total marks are 500 for each student, display the scores & percentages of students like:

var students = ["Maheen", "Hareem", "Hiba"];
var score = [478, 390, 280, 500];

document.write(
  "Score of " +
    students[0] +
    " is " +
    score[0] +
    ". Percentage is " +
    (score[0] / score[3]) * 100 +
    "% <br>"
);
document.write(
  "Score of " +
    students[1] +
    " is " +
    score[1] +
    ". Percentage is " +
    (score[1] / score[3]) * 100 +
    "% <br>"
);
document.write(
  "Score of " +
    students[2] +
    " is " +
    score[2] +
    ". Percentage is " +
    (score[2] / score[3]) * 100 +
    "%"
);

// 9. Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
// Display the updated array in your browser. b. Ask the user what color he/she wants to
//  add to the end & add that color to the end of the array. Display the updated array in your browser.
// c. Add two more color to the beginning of the array. Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated array in your browser.
// e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color
// to desired position/index. . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

// var colors = ["yellow", "green", "red"];
// document.write("Initial colors: " + colors + "<br><br>");

// var userColor = prompt("Which color do you want to add at the beginning?");
// colors.unshift(userColor);
// document.write("After adding at beginning: " + colors + "<br><br>");

// userColor = prompt("Which color do you want to add at the end?");
// colors.push(userColor);
// document.write("After adding at end: " + colors + "<br><br>");

// colors.unshift("purple", "blue");
// document.write("After adding two colors at beginning: " + colors + "<br><br>");

// colors.shift();
// document.write("After deleting first color: " + colors + "<br><br>");

// colors.pop();
// document.write("After deleting last color: " + colors + "<br><br>");

// var colorIndex = +prompt("which index do you want to add color?");
// var colorName = prompt("color name?")
// colors.splice(colorIndex,0,colorName);

// document.write("After adding color at desire index and color: " + colors + "<br><br>");

// colorIndex = +prompt("which index do you want to delete color?");
// var colorCount = +prompt("how many colors do you want to delete?");
// colors.splice(colorIndex,colorCount);

// document.write("After deleting color at desire index: " + colors + "<br><br>");


//10. Write a program to store student scores in an array & sort the array
//  in ascending order using Array’s sort method.

var scores = [320,230,480,120];
score.sort();
console.log(score);



//11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

var selectedCities = cities.slice(0, 3);

document.write("Cities: " + cities + "<br>");
document.write("Selected Cities: " + selectedCities);



// 12. Write a program to create a single
//  string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)
var arr = ["This ", " is ", " my ", " cat"];
 var myarr = arr.join("");
console.log(myarr);


//13. Create a new array. Store values one by one in such a way that you can access the
// values in the order in which they were stored. (FIFO-First In First Out)

var queue = [];
queue.push("Keyboard");
queue.push("Mouse");
queue.push("Printer");
document.write("Devices:<br>");
document.write(queue[0] + "<br>");
document.write(queue[1] + "<br>");
document.write(queue[2]);


// 14.Create a new array. Store values one by one in such a way that you can access
// the values in reverse order. (Last In-First Out)

var stack = [];
stack.push("Keyboard");
stack.push("Mouse");
stack.push("Printer");
document.write("Devices:<br>");
document.write(stack.pop() + "<br>");
document.write(stack.pop() + "<br>");
document.write(stack.pop());

//15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.
//  Display the following dropdown/select menu in your browser using document.write() method:

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
document.write("<option>" + manufacturers[0] + "</option>");
document.write("<option>" + manufacturers[1] + "</option>");
document.write("<option>" + manufacturers[2] + "</option>");
document.write("<option>" + manufacturers[3] + "</option>");
document.write("<option>" + manufacturers[4] + "</option>");
document.write("<option>" + manufacturers[5] + "</option>");
document.write("</select>");
