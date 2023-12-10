const fs = require('fs');
const filePath = 'input.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    const engineSchematic = data.split('\n');
    const symbols = ['*', '#', '+', '$'];

    for (let schematicDetails = 0; schematicDetails < engineSchematic.length; schematicDetails++) {
        let currentSchematic = engineSchematic[schematicDetails];
        //467..114..


        console.log(engineSchematic[schematicDetails]);
    }

    console.log(engineSchematic);
})