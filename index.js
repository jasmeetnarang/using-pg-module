const express = require("express");
const app = express();
const path = require("path")
const bodyParser =require("body-parser");
const client = require("./client")

app.use(express.static(path.join(__dirname, '..', 'client', 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use("/apiRouting", require("./apiRouting"));

app.listen(3000,function(){
	console.log('listening on port 3000!');
})

