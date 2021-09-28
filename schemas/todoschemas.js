const mongoose = require("mongoose");
const todosSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: String,
	status: {
		type: String,
		enum: ["active", "inactive"],
	},
	date: {
		type: Date,
		default: Date.now(),
	},
});

todosSchema.methods = {
	findActive: function () {
		return mongoose.model("Todo").find({ status: "active" });
	},
	findInactive: function (callback) {
		return mongoose.model("Todo").find({ status: "inactive" }, callback);
	},
};

// static methods
todosSchema.statics = {
	findJs: function () {
		return this.find({ title: /(js)/gi });
	},
};
// query helpers
todosSchema.query = {
	byLanguage: function (lang) {
		return this.find({ title: new RegExp(lang, "i") });
	},
};

module.exports = todosSchema;
