const express = require("express");
const mongoose = require("mongoose");
const todoHandler = require("./routeHandler/todoHandler");
const userHandler = require("./routeHandler/userHandler");
const dotenv = require("dotenv");
const app = express();

app.use(express.json());
dotenv.config();
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
app.use("/user", userHandler);

const errorHandler = (err, req, res, next) => {
	if (res.headersSent) {
		return next(err);
	}
	res.status(500).json({ error: err });
}

app.use(errorHandler);

app.listen(8080, () => {
	console.log("Server running at http://localhost:8080");
});
