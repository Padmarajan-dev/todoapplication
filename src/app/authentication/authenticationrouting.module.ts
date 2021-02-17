import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { Routes,RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:SigninComponent,
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AuthenticationroutingModule { }
