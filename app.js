// 3. Declare and initialize a strings array.

var myStr = ["maheen", "hareem", "hiba", "hina"];

// 4. Declare and initialize a numbers array.

var myNum = [4, 5,6,7,8,9];

// 5. Declare and initialize a boolean array.

var myBoolean = [true , false];

// 6. Declare and initialize a mixed array.

var myArr = ["maheen", "hareem",  false , 5,6,7];

// 7. Declare and Initialize an array and store available education qualifications in Pakistan 
// (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). 
// Show the listed qualifications in your browser like:

var edu = ["SSC", "HSC","BSC","BS","BCOM","MS","M.Phil","Phd"];

document.write("<h1>Educations:</h1><ol><li>" + edu[0] + "</li><li>" + edu[1] + "</li><li>" + edu[2] + "</li><li>" + edu[3] +
     "</li><li>" + edu[4] + "</li><li>" + edu[5] + "</li><li>" + edu[6] + "</li><li>" + edu[7] + "</li></ol>")

    //  Write a program to store 3 student names in an array.Take another array to store score of these three students. 
    // Assume that total marks are 500 for each student, display the scores & percentages of students like:

    var students = ["Maheen", "Hareem", "Hiba",];
    var score = [478 , 390, 280, 500];
    
    document.write("Score of " + students[0] + " is " + score[0]+". Percentage is " + score[0] / score[3] * 100 + "% <br>" );
     document.write("Score of " + students[1] + " is " + score[1]+". Percentage is " + score[1] / score[3] * 100 + "% <br>" );
      document.write("Score of " + students[2] + " is " + score[2]+". Percentage is " + score[2] / score[3] * 100 + "%" );
    
    