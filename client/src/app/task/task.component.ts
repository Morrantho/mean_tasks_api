import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'TaskComponent',
	templateUrl: './task.component.html',
	styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {
	@Input() currentTask:any;

	constructor(){}

	ngOnInit(){}
	
}
