const fs = require('fs');
const filePath = 'input.txt';

const replacements = [
    ["one", "o1e"], ["two", "t2o"], ["three", "t3e"], ["four", "f4r"], ["five", "f5e"],
    ["six", "s6x"], ["seven", "s7n"], ["eight", "e8t"], ["nine", "n9e"]
];

fs.readFile(filePath, 'utf8', (err, data) => {
    const lines = data.split('\n');
    let totalCalibration = 0;

    lines.forEach((line, index) => {
        replacements.forEach(([search, replace]) => {
            line = line.replaceAll(search, replace);
        });

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