const express = require("express");
const adminRouter = express.Router();

adminRouter.param("user", (req, res, next, id) => {
	req.user = id === "1" ? "Admin" : "public";
	next();
});

adminRouter.get("/about/:user", (req, res) => {
	res.send("This is an admin about page. Hello " + req.user);
});

adminRouter.get("/main", (req, res) => {
	res.send("This is an admin main page");
});

module.exports = adminRouter;
