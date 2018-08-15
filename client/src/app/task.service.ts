import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})

export class TaskService {
    constructor(private http:HttpClient){}

    create(task,cb){
        this.http.post("/api/tasks",task)
        .subscribe(data=>cb(data));
    }

    all(cb){
        this.http.get("/api/tasks")
        .subscribe(data=>cb(data));
    }

    findById(id,cb){
        this.http.get("/api/tasks/"+id)
        .subscribe(data=>cb(data));
    }

    update(task,cb){
        this.http.patch("/api/tasks/"+task._id,task)
        .subscribe(data=>cb(data));
    }

    destroy(taskId,cb){
        this.http.delete("/api/tasks/"+taskId)
        .subscribe(data=>cb(data));
    }
}
