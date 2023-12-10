const fs = require('fs');
const filePath = 'input.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    const games = data.split('\n');
    const redCubes = 12, greenCubes = 13, blueCubes = 14;
    let gameIdTotal = 0;

    for (let i = 0; i < games.length; i++) {
        let gameDetails = games[i];
        let gameId = gameDetails.split(':')[0].split(' ')[1];

        let gameSets = gameDetails.split(':')[1].split(';');
        let failed = 0;

        console.log("--- Game Set " + gameId + " ---");
        console.log(gameSets);

        for (let i = 0; i < gameSets.length; i++) {
            let gameSetLength = gameSets[i].split(',').length;
            let reds = 0, greens = 0, blues = 0;

            for (let j = 0; j < gameSetLength; j++) {
                let setDetails= gameSets[i].split(',')[j].trim().split(' ');
                if (setDetails[1] === "red") {
                    reds += setDetails[0];
                }
                else if (setDetails[1] === "green") {
                    greens += setDetails[0];
                }
                else if (setDetails[1] === "blue") {
                    blues += setDetails[0];
                }
            }

            if (reds > redCubes || greens > greenCubes || blues > blueCubes) {
                failed++;
            }
        }

        if (failed === 0) {
            console.log("Game with ID " + gameId + " has passed.");
            gameIdTotal += parseInt(gameId);
        }
    }
    console.log(gameIdTotal);
})