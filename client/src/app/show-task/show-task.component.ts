import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '../../../node_modules/@angular/router';
import { TaskService } from '../task.service';

@Component({
    selector: 'app-show-task',
    templateUrl: './show-task.component.html',
    styleUrls: ['./show-task.component.css']
})

export class ShowTaskComponent implements OnInit {
    private task:any;

    constructor(private route:ActivatedRoute,private router:Router,private ts:TaskService){}

    update(){
        this.ts.update(this.task,(data)=>{
            return this.router.navigateByUrl("/");
        });
    }

    ngOnInit(){
        this.route.params.subscribe(params=>{
            this.ts.findById(params.id,(data)=>{
                if(!data) return this.router.navigateByUrl("/");

                this.task = data;
            });
        });
    }
}
