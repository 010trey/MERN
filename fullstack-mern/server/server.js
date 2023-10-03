const express = require("express");
const cors = require("cors");
const app = express()



const PORT = 1337;
const DB = "notesApp_db";


app.use(express.json(), express.urlencoded({extended: true}), cors());
require('./config/mongoose.config')(DB)
require('./routes/note.routes')(app)

app.listen(PORT, () => console.log('>>>>server is running on port ${PORT}<<<<'))

