// dependencies
const http = require("http");
const express = require("express");

const app = express();
app.set("view engine", "ejs");
// const admin = express();

// admin.on("mount", (parent) => {
// 	console.log("admin mounted");
// 	console.log(parent)
// })

// admin.get("/dashboard", (req, res) => {
// 	console.log(admin.mountpath);
// 	res.send("<h1>This is home page from admin!</h1>");
// });

app.get("/", (req, res) => {
	res.send("<h1>This is home page!</h1>");
});
// understanding routing
// system one for same type routing------------------>
// app.get("/home/about/", (req, res) => {
// 	res.send("<h1>This is get method");
// });
// app.post("/home/about/", (req, res) => {
// 	res.send("<h1>This is post method");
// });
// app.put("/home/about/", (req, res) => {
// 	res.send("<h1>This is put method");
// });
// system two ----------->
app.route("/home/about/")
	.get((req, res) => {
		res.render("index");
	})
	.put((req, res) => {
		res.send("<h1>This is put method</h1>");
	})
	.post((req, res) => {
		res.send("<h1>This is post method</h1>");
	});
// app.param("id", (req, res, next, getId) => {
// 	const user = {
// 		id: getId,
// 		name: "Bangladesh",
// 	};
// 	req.userData = user;
// 	next();
// });

// app.get("/shocked/:id", (req, res) => {
// 	console.log(req.userData);
// 	res.send("<h1>This is the most shocked moment in 2021! for me.</h1>");
// });

// app.use("/admin", admin);

app.listen(3000, () => {
	console.log("server is running at http://localhost:3000");
});
