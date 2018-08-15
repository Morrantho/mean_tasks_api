import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowTaskComponent} from "../show-task/show-task.component";
import { TasksComponent } from '../tasks/tasks.component';

const routes: Routes = [
    {path:"",pathMatch:"full",component:TasksComponent},
    {path:"tasks/:id",component:ShowTaskComponent},
    {path:"**",redirectTo:"/"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
