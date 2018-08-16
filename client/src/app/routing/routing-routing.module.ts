import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from '../tasks/tasks.component';

const routes: Routes = [
    {path:"",pathMatch:"full",component:TasksComponent},
    {path:"**",redirectTo:"/"}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingRoutingModule { }
