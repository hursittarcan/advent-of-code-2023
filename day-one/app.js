const fs = require('fs');

const filePath = 'input.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    const lines = data.split('\n');

    lines.forEach((line, index) => {
        console.log(line);
    });
});
