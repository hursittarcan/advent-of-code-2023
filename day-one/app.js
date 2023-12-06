const fs = require('fs');
const filePath = 'input.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    const lines = data.split('\n');
    let totalCalibration = 0;

    lines.forEach((line, index) => {
        let firstNumber, lastNumber;

        for (let i = 0; i < line.length; i++) {
            if (isFinite(line[i])) {
                if (firstNumber === undefined) {
                    firstNumber = line[i];
                }

                //First version of my solution checked whether the current line contains more than
                //two numbers, since the challenge stated FIRST and LAST number, but turns out both can be the
                //same, e.g: `eighttkbtzjz6nineeight` this only contains one numeric value -> 6, this is both the
                //FIRST as the LAST value, soo this would become 66 in total for this specific line.
                lastNumber = line[i];
            }
        }

        if (firstNumber !== undefined) {
            const totalLine = lastNumber !== undefined ? firstNumber + lastNumber : firstNumber;
            totalCalibration += parseInt(totalLine);
        }
    });
    console.log(totalCalibration);
});

