const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
	callback(404, {
		message: "url request not found",
	});
};

module.exports = handler; 
