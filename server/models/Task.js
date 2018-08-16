let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let ForeignKey = Schema.Types.ObjectId;

let TaskSchema = new Schema({
	title:{
		type:String,
		required:[true,"Title is required!"],
		maxlength:[8,"Title must be between 1-8 characters."]
	},

	description:{
		type:String,
		required:[true,"Description is required!"],
	},
	
	completed:{
		type:Boolean,
		default:false
	}

},{timestamps:true});

mongoose.model("Task",TaskSchema);