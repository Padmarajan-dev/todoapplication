import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signInForm:FormGroup
  constructor(private fBuilder:FormBuilder,private apiService:ApiService,private router:Router) { }

  //get signinform controls
  get f()
  {
    return this.signInForm.controls;
  }

  //signIn
   signIn()
   {
      var users:any[] = this.apiService.getUsers();
      var authorizedUser=users.filter(e=>e.username==this.f.username.value && e.email==this.f.email.value);
      if(authorizedUser.length!=0)
      {
        Swal.fire({
          title:'SignIn',
          text:"you're Signinned successfully",
          icon:'success',
          timer:2500
        }); 
     //for save userid on Localstorage
     localStorage.setItem('userId',authorizedUser[0].id.toString());   
     //for navigation
     this.router.navigate(['/']);
      }else
      {
        Swal.fire({
          title:'SignIn',
          text:"Username or email id is not exist",
          icon:'error',
          timer:2500
        })
      } 

   }
  ngOnInit(): void {
    //Initalizing siginform
    this.signInForm=this.fBuilder.group({
      "username":['',[Validators.required,Validators.minLength(2),Validators.maxLength(8)]],
      "email":['',[Validators.required,Validators.email]]
    })
  }

}
