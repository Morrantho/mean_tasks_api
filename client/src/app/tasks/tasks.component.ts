import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
    selector: 'TasksComponent',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
    private tasks:any;

    constructor(private ts:TaskService){}

    ngOnInit(){
        this.ts.all(data=>this.tasks=data);
    }

    addTask(task){
        this.tasks.push(task);
    }
}
