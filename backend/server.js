// jshint esversion:6

const express = require("express");
const path = require("path")
const bodyParser = require("body-parser");
const axios = require("axios")


const app = express();
app.use(express.static("../public"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function (req,res) {
    res.sendFile("index.html",{root:path.join(__dirname,'../')});
});

app.get("/api",async(req,res)=> {
    console.log(req._parsedUrl.query);
    let r = await axios.get("https://newsapi.org/v2/everything?"+req._parsedUrl.query );
    let a = r.data;
    res.json(a);
    
});


app.listen(3000,function () {
    console.log("Server active on Port 3000");
});