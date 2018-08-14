import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
    selector: 'NewTaskComponent',
    templateUrl: './new-task.component.html',
    styleUrls: ['./new-task.component.css']
})

export class NewTaskComponent implements OnInit {
    private task:any;
    private tasks:any;

    constructor(private ts:TaskService){
        this.task = {
            title:"",
            description:"",
            completed:false
        };
    }

    ngOnInit(){
        this.ts.all(data=>this.tasks=data);
    }

    create(){
        this.ts.create(this.task,(data)=>{
            this.tasks.push(data);
        });
    }
}
