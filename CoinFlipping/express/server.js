    // index.js
    const express = require('express');
    // const port = 8000
    // const app = express()

    function tossCoin() {
        return Math.random() > 0.5 ? "heads" : "tails";
    }
    
    function fiveHeads() {
        return new Promise((resolve, reject) => {
            let headsCount = 0;
            let attempts = 0;
    
            function flipCoin() {
                attempts++;
                let result = tossCoin();
                console.log(`${result} was flipped`);
                if (result === "heads") {
                    headsCount++;
                    if (headsCount === 5) {
                        resolve(`It took ${attempts} tries to flip five "heads"`);
                    } else {
                        flipCoin(); // Flip the coin again if it's heads but not yet 5 times in a row
                    }
                } else {
                    headsCount = 0;
                    if (attempts >= 100) {
                        reject("Coin was flipped more than 100 times without getting 5 heads in a row.");
                    } else {
                        flipCoin(); // Flip the coin again if it's tails
                    }
                }
            }
    
            flipCoin(); // Start the coin flipping process
        });
    }
    
    fiveHeads()
        .then(res => console.log(res))
        .catch(err => console.log(err));
    
    console.log("When does this run now?");
    

    // app. listen(port, ()=>{
    //     console .log('>>>server is running on port ${port}<<<');
    // })
