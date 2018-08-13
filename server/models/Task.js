let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let ForeignKey = Schema.Types.ObjectId;

let TaskSchema = new Schema({
	title:String,
	description:{type:String,default:""},
	completed:{type:Boolean,default:false}
},{timestamps:true});

mongoose.model("Task",TaskSchema);