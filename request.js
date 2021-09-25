// dependencies
const http = require("http");
const express = require("express");
const app = express();

const router = express.Router({
	caseSensitive: false,
});

app.use(router);

// app.use(express.static(__dirname + "/public/"));

router.get("/about", (req, res) => {
	res.send("This is home page!");
});

router.post("/about", (req, res) => {
	res.send("This is about page with a post request!");
});

app.listen(3000, () => {
	console.log("server is running at http://localhost:3000");
});
