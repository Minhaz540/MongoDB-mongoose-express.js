const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.format({
		"text/plain": function () {
			res.send("hey");
		},

		"text/html": function () {
			res.send("<p>hey</p>");
		},

		"application/json": function () {
			res.send({ message: "hey" });
		},

		default: function () {
			// log the request and respond with 406
			res.status(406).send("Not Acceptable");
		},
	});
});

app.get("/download", (req, res) => {
	res.download("./expels.pdf");
});

app.get("/pdf", (req, res) => {
    res.send("./expels.pdf");
})

app.listen(8080, () => {
	console.log("Server running at http://localhost:8080");
});
