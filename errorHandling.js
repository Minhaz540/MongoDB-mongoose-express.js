const express = require("express");
const fs = require("fs");
const app = express();
const adminRouter = require("./adminRouter");

app.use("/admin", adminRouter);

app.get("/", (req, res, next) => {
	fs.readFile("/Home page", (err, data) => {
		if (err) {
			next(err);
		} else {
			res.send(data);
		}
	});
});

app.listen(8080, () => {
	console.log("Server running at http://localhost:8080");
});
