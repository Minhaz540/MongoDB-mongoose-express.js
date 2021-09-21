const url = require("url");
const { StringDecoder } = require("string_decoder");
const routes = require("../routes");
const {
	notFoundHandler,
} = require("../handlers/routesHandlers/notFoundHandler");

const handler = {};

// handleReqRes
handler.handleReqRes = (req, res) => {
	// handle url
	const parsedUrl = url.parse(req.url, true);
	//get path
	const path = parsedUrl.pathname;
	//trimmed the path with regular expressions
	const trimmedPath = path.replace(/^\/+|\/+$/g, "");
	const method = req.method.toLowerCase();
	const queryStringObject = parsedUrl.query;
	const headersObject = req.headers;

	const requestProperties = {
		parsedUrl,
		path,
		trimmedPath,
		method,
		queryStringObject,
		headersObject,
	};
	const decoder = new StringDecoder("utf-8");
	let realData = "";

	const chosenHandler = routes[trimmedPath]
		? routes[trimmedPath]
		: notFoundHandler;

	chosenHandler(requestProperties, (statusCode, payload) => {
		statusCode = typeof statusCode === "number" ? statusCode : 500;
		payload = typeof payload === "object" ? payload : {};
		const payloadString = JSON.stringify(payload);

		// returning the final response
		res.writeHead(statusCode);
		res.end(payloadString);
	});

	req.on("data", (buffer) => {
		realData += decoder.write(buffer);
	});
	req.on("end", () => {
		realData += decoder.end();
		console.log(realData);
		res.end("headersObject");
	});
};

module.exports = handler;
