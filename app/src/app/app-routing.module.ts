import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FootballComponent } from './football/football.component';


const routes: Routes = [
  {path: 'todo', component: TodoComponent},
  {path: 'api', component: FootballComponent},
  {path: '', redirectTo: '/todo', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
