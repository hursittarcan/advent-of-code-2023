const fs = require('fs');
const filePath = 'input.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    const cards = data.split('\n');

    for (let i = 0; i < cards.length; i++) {
        let game = (cards[i].split(':')[1]).trim();
        let winningNumbers = [];
        let totalWinningNumbersInGame = 0;

        for (let i = 0; i < game.split(' | ')[0].split(' ').length; i++) {
            winningNumbers.push(parseInt((game.split(' | ')[0].split(' '))[i]));
        }

        for (let i = 0; i < game.split(' | ')[1].split(' ').length; i++) {
            if (!isNaN(parseInt(game.split(' | ')[1].split(' ')[i]))) {
                let myNumber = game.split(' | ')[1].split(' ')[i];
                if (winningNumbers.includes(parseInt(myNumber))) {
                    console.log("INSIDE: " + myNumber);
                    totalWinningNumbersInGame++;
                }
            }
        }
        console.log("Total winning: " + totalWinningNumbersInGame);
        console.log(game);
        console.log(winningNumbers);
    }

    //console.log(lines);
})