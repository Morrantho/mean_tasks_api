import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
	selector: 'TaskComponent',
	templateUrl: './task.component.html',
	styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {
	@Input() currentTask:any;
	@Output() deleteTaskEmitter = new EventEmitter(); 

	constructor(private ts:TaskService){

	}

	ngOnInit(){
		this.edit();
	}
	

	destroy(taskId){
		this.ts.destroy(taskId,(task)=>{
			this.deleteTaskEmitter.emit(task);
		});
	}

	edit(){
		if(!this.currentTask.edit) this.currentTask.edit = true;
		else this.currentTask.edit = false;
	}

	update(){
		this.ts.update(this.currentTask,(data)=>{
			this.currentTask=data;
			this.edit();
		});
	}
}
