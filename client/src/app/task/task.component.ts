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

	ngOnInit(){}
	

	destroy(taskId){
		this.ts.destroy(taskId,(task)=>{
			this.deleteTaskEmitter.emit(task);
		});
	}
}
