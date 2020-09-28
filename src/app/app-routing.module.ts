import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTodosComponent } from './add-todos/add-todos.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addtodos', component: AddTodosComponent },
  { path: 'update', component: UpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routerComponent = [HomeComponent, AddTodosComponent];
