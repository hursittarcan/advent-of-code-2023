const fs = require('fs');
const filePath = 'input.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    const cards = data.split('\n');
    let totalPoints = 0;

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
                    totalWinningNumbersInGame++;
                }
            }
        }

        if (totalWinningNumbersInGame >= 1) {
            let points = 1;
            for (let point = 0; point < totalWinningNumbersInGame - 1; point ++) {
                points *= 2;
            }
            totalPoints += points;
        }
    }
    console.log(totalPoints);
})