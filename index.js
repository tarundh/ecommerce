const express = require("express")

const ejs = require("ejs")
const { application } = require("express")

const app = express();

// this is gonna tell the express to use the public folder to deliver the static webpage
app.use(express.static("public"));

//this is gonna tell the express to use ejs as our view engine
app.set("view engine", "ejs")


app.get("/", function(req, res){

    // to render or send the ejs files we need to specify the path
    res.render("pages/index")
})

app.listen(3000, function(){

})