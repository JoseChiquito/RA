const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT;
app.use(express.static('/RA1_PSJE/src/'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/RA1_PSJE/src/index.html');
});

app.listen(port, ()=>{
    console.log("Sevidor coriendo en puerto: ${port}");
});

//app.get('*',(req,res)=>{
  //  res.sendFile(__dirname + '/public/404.html')
//});
