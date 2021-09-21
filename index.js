const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");
// module scaffolding
const app = {};

// configuration section 
app.config = {
	PORT: 8080,
};

//crating server
app.createServer = () => {
	const server = http.createServer(app.handleReqRes);
	server.listen(app.config.PORT, () => {
		console.log(`Server running at http://localhost:${app.config.PORT}`);
	});
};

app.handleReqRes = handleReqRes;

// start the server
app.createServer();
