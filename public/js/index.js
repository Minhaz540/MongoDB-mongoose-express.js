const express = require("express");
const app = express();

app.use(express.static("public"));


app.get("/", (req, res) => {
	res.sendFile(__dirname + "/pages/index.html");
});

app.get("/requirement", (req, res) => {
	res.sendFile(__dirname + "/pages/requirement.html");
});

app.get("/requirement/download", (req, res) => {
	res.download("./expels.pdf");
});

app.listen(8080, () => {
	console.log("Server running at http://localhost:8080");
});
