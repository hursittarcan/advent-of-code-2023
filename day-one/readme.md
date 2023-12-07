//First version of my solution checked whether the current line contains more than
//two numbers, since the challenge stated FIRST and LAST number, but turns out both can be the
//same, e.g: `eighttkbtzjz6nineeight` this only contains one numeric value -> 6, this is both the
//FIRST as the LAST value, soo this would become 66 in total for this specific line.

lastNumber = line[i];

## Day One - Trebuchet?! [Part 1]
This JavaScript code reads the content of `input.txt` 
using the 'fs' (file system) module. The file is assumed to contain 
text with numeric values. The program calculates a calibration total 
based on the first and last numeric characters found on each line of this file.

1. **File Reading:**
    - First we import the 'fs' module for file system operations in Node.js.    
    `const fs = require('fs');`
    - Secondly we set the filePath variable to our file name, which in my case is 'input.txt'.    
      `const filePath = 'input.txt';`
    - Next, we use the 'fs.readFile' function to read the content of the 'input.txt' file in UTF-8 encoding.     
      `fs.readFile(filePath, 'utf8', (err, data)`
    - 


      
      
    - It uses the 'fs.readFile' function to read the content of the 'input.txt' file in UTF-8 encoding.
    - 
    - The content is split into an array of lines using the newline character (`\n`).

1. **Calibration Calculation:**
    - For each line, the code iterates through each character to find numeric values.
    - It keeps track of the first and last numeric values encountered on the line.
    - The challenge initially expected distinct first and last numbers, but later clarified that they can be the same.
    - The code calculates the total for the current line, considering both first and last numbers.
    - The total for each line is added to the overall 'totalCalibration' variable.

2. **Output:**
    - The final calibration total is logged to the console.

The code uses asynchronous file reading, a 'forEach' loop for line processing, and a nested loop to find numeric values on each line. The total calibration is based on the concatenation of the first and last numeric values on each line.
