function rollDice() {
    let goldCoins = 0;

    for(i = 0; i < 10; i++) {
       const roll = Math.floor(Math.random() * 6) + 1;
       if (roll===1) {
       alert('you rolled a ' + roll + 'gameover!');
       break;
       }
       if (roll < 5) {
           continue;
       }
       alert('Congratulations! you just won ' + roll + 'gold coins');
           goldCoins += roll;
    }
    alert('you have won a total of ' + goldCoins + '');
} 