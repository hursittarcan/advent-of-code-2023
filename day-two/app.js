const fs = require('fs');
const filePath = 'input.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    const games = data.split('\n');
    const redCubes = 12, greenCubes = 13, blueCubes = 14;

    for (let i = 0; i < games.length; i++) {
        let gameDetails = games[i];
        let gameId = gameDetails.split(':')[0].split(' ')[1];

        let gameSets = gameDetails.split(':')[1].split(';');
        console.log(gameSets);

        for (let i = 0; i < gameSets.length; i++) {
            // console.log(gameSets[i].split(',').length);
            // console.log(gameSets[i].split(',')[0]);
            // console.log(gameSets[i].split(',')[1]);
            let gameSetLength = gameSets[i].split(',').length;
            for (let j = 0; j < gameSetLength; j++) {
                console.log(gameSets[i].split(',')[j]);
            }
            console.log("-----");
        }

        //console.log(gameDetails);
        //console.log(gameId);


        //Game 5: 3 green, 7 blue, 7 red; 6 green, 3 red, 4 blue; 7 blue, 4 red
        //console.log(gameDetails)
        console.log("--- SET ENDS HERE ---")
    }

})