const fs = require('fs');
const filePath = 'input.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    const games = data.split('\n');
    const redCubes = 12, greenCubes = 13, blueCubes = 14;
    let gameIdTotal = 0;
    let gamePowerTotal = 0;

    for (let i = 0; i < games.length; i++) {
        let gameDetails = games[i];
        let gameId = gameDetails.split(':')[0].split(' ')[1];

        let gameSets = gameDetails.split(':')[1].split(';');
        let failed = 0;

        console.log("--- Game Set " + gameId + " ---");
        console.log(gameSets);

        let reds = 0, greens = 0, blues = 0;

        for (let i = 0; i < gameSets.length; i++) {
            let gameSetLength = gameSets[i].split(',').length;

            for (let j = 0; j < gameSetLength; j++) {
                let setDetails= gameSets[i].split(',')[j].trim().split(' ');
                if (setDetails[1] === "red") {
                    if (setDetails[0] > reds) {
                        console.log(setDetails[0])
                        reds = setDetails[0];
                    }
                }
                else if (setDetails[1] === "green") {
                    if (setDetails[0] > greens) {
                        greens = setDetails[0];
                    }
                }
                else if (setDetails[1] === "blue") {
                    if (setDetails[0] > blues) {
                        blues = setDetails[0];
                    }
                }
            }
        }

        console.log('---');
        console.log(reds);
        console.log(greens);
        console.log(blues);
        console.log('---');

        gamePowerTotal += (reds * greens * blues);

        // if (failed === 0) {
        //     console.log("Game with ID " + gameId + " has passed.");
        //     gameIdTotal += parseInt(gameId);
        // }
    }
    console.log(gamePowerTotal);
})