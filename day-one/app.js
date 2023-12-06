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

