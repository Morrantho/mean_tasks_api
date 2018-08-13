let path   = require("path");
let fs     = require("fs");
let routes = path.join(__dirname, '../routes');
let TaskController = require("../controllers/TaskController.js");

module.exports =(app)=>{
	// Loop all routes, call their sole method passing them an instance of our app.
	fs.readdirSync(routes).forEach(function(file) {
		if(file.indexOf('.js') >= 0) require(routes + '/' + file)(app);
	});

	// ********************************************************
	// Angular
	// ********************************************************
	app.all("*", (req,res,next) => {
		res.sendFile(path.resolve("./client/dist/client/index.html"))
	});
}
