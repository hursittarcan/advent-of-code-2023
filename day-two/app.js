const fs = require('fs');
const filePath = 'input.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    const games = data.split('\n');
    let gamePowerTotal = 0;

    for (let i = 0; i < games.length; i++) {
        let gameDetails = games[i];
        let gameId = gameDetails.split(':')[0].split(' ')[1];
        let gameSets = gameDetails.split(':')[1].split(';');
        let reds = 0, greens = 0, blues = 0;

        for (let i = 0; i < gameSets.length; i++) {
            let gameSetLength = gameSets[i].split(',').length;

            for (let j = 0; j < gameSetLength; j++) {
                let setDetails= gameSets[i].split(',')[j].trim().split(' ');
                if (setDetails[1] === "red") {
                    if (parseInt(setDetails[0]) > reds) {
                        reds = setDetails[0];
                    }
                }
                else if (setDetails[1] === "green") {
                    if (parseInt(setDetails[0]) > greens) {
                        greens = setDetails[0];
                    }
                }
                else if (setDetails[1] === "blue") {
                    if (parseInt(setDetails[0]) > blues) {
                        blues = setDetails[0];
                    }
                }
            }
        }

        gamePowerTotal += (reds * greens * blues);
    }
})