import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path:'signin',
    loadChildren:()=>import('./authentication/authentication.module').then(m=>m.AuthenticationModule)
  },
  {
    path:'',
    loadChildren:()=>import('./todo/todo.module').then(m=>m.TodoModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
