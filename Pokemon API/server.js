const express = require("express")
const PORT = 8000
const app = express()

const noMondays = new Promise((resolve, reject) => {
    if (new Date().getDay() !== 1) {
        resolve("Good, it's not Monday!");
    } else {
        reject("Someone has a case of the Mondays!");
    }
});

noMondays
    .then(res => console.log(res)) // Handles the resolved state
    .catch(err => console.log(err)); // Handles the rejected state





app. listen(PORT, ()=>{
    console.log('>>>SERVER IS RUNNING 0N PORT ${PORT}<<<')
})