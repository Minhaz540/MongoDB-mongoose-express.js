// dependencies
const http = require('http');

// app object - module scaffolding
const app = {};


app.config = {
	PORT: 8080,
};
const {PORT} = app.config;

// create server
app.createServer = () => {
	const server = http.createServer();
	server.listen(app.config.port, () => {
		console.log(`server running ar http://localhost:${PORT}`);
	});
};


// start the server
app.createServer();
