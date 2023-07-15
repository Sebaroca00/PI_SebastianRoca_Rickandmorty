//CON EXPRESS
require ("dotenv").config();
const { PORT } = process.env
const express = require ("express");
const router = require("./routes/index")
const server = express();
const {conn} = require("./DB_connection")

conn.sync({force: false })
.then(()=>{
server.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`);
    });
   })
.catch((error) => {
    console.log(error);
});
