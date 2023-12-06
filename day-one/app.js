const fs = require('fs');
const filePath = 'input.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    const lines = data.split('\n');

    //Parent for - loops over each line
    lines.forEach((line, index) => {
        let firstNumber, lastNumber;
        let numericAmount = 0;

        //Child 1 - loops over each char of selected line
        for (let i = 0; i < line.length; i++) {
            if (isFinite(line[i])) {
                if (firstNumber === undefined) {
                    firstNumber = line[i];
                }

                numericAmount++;

                if (numericAmount > 2) {
                    lastNumber = line[i];
                }
            }
        }

        console.log(`Line ${index + 1}: First: ${firstNumber}, Last: ${lastNumber}`);
    });
});
