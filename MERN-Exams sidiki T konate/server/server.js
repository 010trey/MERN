const express = require("express");
const cors = require('cors')
const app = express();
require('dotenv').config();

const PORT = process.env.PORT
const DB = process.env.DB



app.use(express.json(), express.urlencoded({ extended: true }), cors());
require('./config/mongoose.config')(DB)
require('./routes/pet.routes')(app)


app.listen(PORT, () => console.log(`🚀🚀🚀🚀 >>> SERVER IS RUNNING ON PORT ${PORT} <<< 🚀🚀🚀`))
