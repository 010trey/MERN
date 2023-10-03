const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
const e = require("express");


const app = express();
app.use(express.json());
app.use(cors({origin:true}));

app.post("/authenticate", async (req, res) =>{
    const {username} = req.body;

    try{   const r = await axios.put(
            'https://api.chatenging.io/user/',
            {username: username, secret: username, first_name: username},
            {headers:{"private-key": "1234567890"}}
        )
        return res.status(r.status).json(r.data)

    }catch{
        return res.status(e.response.status).json(e.response.data)
    }
    return res.json({username: username, secret: "sha256..."});
});

app.listen(3001);