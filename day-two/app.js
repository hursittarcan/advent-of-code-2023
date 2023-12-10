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
                    console.log("red: " + setDetails[0]);
                    if (parseInt(setDetails[0]) > reds) {
                        console.log("highest red: " + setDetails[0])
                        reds = setDetails[0];
                    }
                }
                else if (setDetails[1] === "green") {
                    console.log("green: " + setDetails[0]);
                    if (parseInt(setDetails[0]) > greens) {
                        console.log("highest green: " + setDetails[0])
                        greens = setDetails[0];
                    }
                }
                else if (setDetails[1] === "blue") {
                    console.log("blue: " + setDetails[0]);
                    if (parseInt(setDetails[0]) > blues) {
                        console.log("highest blue: " + setDetails[0])
                        blues = setDetails[0];
                    }
                }
            }
        }

        console.log('---');
        console.log("final red: " + reds);
        console.log("final green: " +greens);
        console.log("final blue: " + blues);
        console.log('---');

        gamePowerTotal += (reds * greens * blues);
        //console.log(gamePowerTotal);
        console.log("Power sum: " + (reds * greens * blues));

    }
    console.log(gamePowerTotal);
})