import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes ,RouterModule} from '@angular/router';
import { ShowtodoComponent } from './showtodo/showtodo.component';
import { AddtodosComponent } from './addtodos/addtodos.component';
import { TodocomponentComponent } from './todocomponent/todocomponent.component';
import { AuthenticationGuard } from '../authentication.guard';

const routes: Routes = [
{
  path:'',
  component:TodocomponentComponent,
  children:[
    {
      path:'',
      component:ShowtodoComponent,
      canActivate:[AuthenticationGuard]
    },
    {
      path:'addtodos',
      component:AddtodosComponent,
    },
    {
      path:'edittodo/:id',
      component:AddtodosComponent,
    },
  ]
},


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class TodoroutingModule { }
