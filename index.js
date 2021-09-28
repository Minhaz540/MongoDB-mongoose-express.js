const express = require("express");
const mongoose = require("mongoose");
const todoHandler = require("./routeHandler/todoHandler");
const app = express();
app.use(express.json());

// connect with mongoose
mongoose
	.connect("mongodb://localhost/todos", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Connection successful"))
	.catch((err) => console.error(err));

//application routes
app.use("/todo", todoHandler);

function errorHandler(err, req, res, next) {
	if (res.headersSent) {
		return next(err);
	}
	res.status(500).json({ error: err });
}

app.listen(8080, () => {
	console.log("Server running at http://localhost:8080");
});
