// dependencies
const http = require("http");
const express = require("express");
const app = express();



app.get('/', (req, res) => {
	res.send("This is home page!");
})

app.post("/about", (req, res) => {
	res.send("This is about page with a post request!");
})

app.listen(3000, () => {
	console.log("server is running at http://localhost:3000");
});
