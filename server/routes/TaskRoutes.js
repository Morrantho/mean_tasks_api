let TaskController = require("../controllers/TaskController.js");

module.exports=(app)=>{
	app.post("/api/tasks",TaskController.create);
	app.get("/api/tasks",TaskController.all);
	app.get("/api/tasks/:id",TaskController.findById);
	app.patch("/api/tasks/:id",TaskController.update);
	app.delete("/api/tasks/:id",TaskController.destroy);
}