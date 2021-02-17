import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { AuthenticationroutingModule } from './authenticationrouting.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../service/api.service';



@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    AuthenticationroutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[ApiService]
})
export class AuthenticationModule { }
