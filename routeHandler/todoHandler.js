const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const todosSchema = require("../schemas/todoschemas");
const Todo = new mongoose.model("Todo", todosSchema);

// find data
router.get("/", (req, res) => {
	Todo.find({ status: "inactive" }, (err, data) => {
		if (err) {
			res.status(500).json({
				error: "There was a server side error while showing data",
			});
		} else {
			res.status(200).json({
				result: data,
			});
		}
	});
});
// find some specific data
router.get("/specific/data", (req, res) => {
	Todo.find({ status: "inactive" })
		.select({
			_id: 0,
			__v: 0,
			date: 0,
		})
		.limit(2)
		.exec((err, data) => {
			if (err) {
				res.status(500).json({
					error: "There was a server side error while showing data",
				});
			} else {
				res.status(200).json({
					result: data,
				});
			}
		});
});
// find some specific data with instance method
router.get("/active", async (req, res) => {
	const todo = new Todo();
	const data = await todo.findActive();
	res.status(200).json({
		data,
	});
});
// find some specific data with instance method with callback
router.get("/inactive-callback", (req, res) => {
	const todo = new Todo();
	todo.findInactive((err, data) => {
		res.status(200).json({
			data,
		});
	});
});
// find some specific data with static method
router.get("/js", async (req, res) => {
	const data = await Todo.findJs();
	res.status(200).json({
		data,
	});
});
// get todos by language
router.get("/language", async (req, res) => {
	const data = await Todo.find().byLanguage("vanilla");
	res.status(200).json({
		data,
	});
});
// insert single record
router.post("/", (req, res) => {
	const newTodo = new Todo(req.body);
	newTodo.save((err) => {
		if (err) {
			res.status(500).json({
				error: "There was a server side error while saving",
			});
		} else {
			res.status(200).json({
				message: "Data saved successfully",
			});
		}
	});
});
// insert multiple records
router.post("/all", (req, res) => {
	Todo.insertMany(req.body, (err) => {
		if (err) {
			res.status(500).json({
				error: "There was a server side error while saving",
			});
		} else {
			res.status(200).json({
				message: "Data saved successfully",
			});
		}
	});
});
// update one data
router.put("/:id", (req, res) => {
	Todo.updateOne(
		{ _id: req.params.id },
		{
			$set: {
				status: "active",
			},
		},
		(err) => {
			if (err) {
				res.status(500).json({
					error: "There was a server side error while updating",
				});
			} else {
				res.status(200).json({
					message: "Data update successfully",
				});
			}
		}
	);
});
// update multiple data
router.put("/updateAll/data", (req, res) => {
	Todo.updateMany(
		{ status: "active" },
		{
			$set: {
				status: "inactive",
			},
		},
		(err) => {
			if (err) {
				res.status(500).json({
					error: "There was a server side error while updating many data",
				});
			} else {
				res.status(200).json({
					message: "Data update successfully",
				});
			}
		}
	);
});
// Deleting one data
router.delete("/:id", (req, res) => {
	Todo.deleteOne({ _id: req.params.id }, (err) => {
		if (err) {
			res.status(500).json({
				error: "There was a server side error while deleting data",
			});
		} else {
			res.status(200).json({
				message: "Data deleted successfully",
			});
		}
	});
});

module.exports = router;
