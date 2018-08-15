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

    deleteTask(task){
        for(let i=0; i < this.tasks.length; i++){
            if( this.tasks[i]._id == task._id ){
                this.tasks[i] = this.tasks[this.tasks.length-1];
                this.tasks.pop();
                
            }
        }
    }
}
