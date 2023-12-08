const fs = require('fs');
const filePath = 'input.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    const games = data.split('\n');
    const redCubes = 12, greenCubes = 13, blueCubes = 14;

    for (let i = 0; i < games.length; i++) {
        let gameDetails = games[i];
        let gameId = gameDetails.split(':')[0].split(' ')[1];

        console.log(gameId)


        //Game 5: 3 green, 7 blue, 7 red; 6 green, 3 red, 4 blue; 7 blue, 4 red
        //console.log(gameDetails)
    }
})