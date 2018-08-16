import { Component, OnInit, Output } from '@angular/core';
import { TaskService } from '../task.service';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'NewTaskComponent',
    templateUrl: './new-task.component.html',
    styleUrls: ['./new-task.component.css']
})

export class NewTaskComponent implements OnInit {
    private task:any;
    private errors:any;

    @Output() taskEmitter = new EventEmitter();

    constructor(private ts:TaskService){
        this.init();
    }

    init(){
        this.task = {
            title:"",
            description:"",
            completed:false
        };
    }

    ngOnInit(){
        
    }

    create(){
        this.ts.create(this.task,(data)=>{
            if(data.errors){
                this.errors = [];

                for(let error in data.errors){
                    this.errors.push( data.errors[error].message );
                }
            }else{
                this.taskEmitter.emit(data);
                this.init();
            }
        });
    }
}
