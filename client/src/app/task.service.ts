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

    findById(task,cb){
        this.http.get("/api/tasks/"+task._id)
        .subscribe(data=>cb(data));
    }

    update(task,cb){
        this.http.patch("/api/tasks/"+task._id,task)
        .subscribe(data=>cb(data));
    }

    destroy(task,cb){
        this.http.delete("/api/tasks/"+task._id)
        .subscribe(data=>cb(data));
    }
}
