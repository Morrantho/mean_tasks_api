let Task = require("mongoose").model("Task");

class TaskController{
	create(req,res){
		let task = new Task(req.body);
		task.save(e=>{
			if(e) return res.json(e);
			return res.json(task);
		})
	}

	all(req,res){
		Task.find({},(e,tasks)=>{
			if(!tasks) return res.json(e);
			return res.json(tasks);
		});
	}

	findById(req,res){
		Task.findOne({_id:req.params.id},(e,task)=>{
			if(!task)return res.json(e);
			return res.json(task);
		})
	}

	update(req,res){
		Task.findOne({_id:req.params.id},(e,task)=>{
			if(!task)return res.json(e);
			task.title = req.body.title || task.title;
			task.completed = req.body.completed || task.completed;
		})
	}

	destroy(req,res){
		Task.findOne({_id:req.params.id},(e,task)=>{
			if(!task)return res.json(e);
			Task.removeOne({_id:req.params.id},(e)=>{
				if(e)return res.json(e);
				return res.json(task);
			});
		});
	}
}
module.exports = new TaskController();