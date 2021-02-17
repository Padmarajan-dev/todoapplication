import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-addtodos',
  templateUrl: './addtodos.component.html',
  styleUrls: ['./addtodos.component.scss']
})
export class AddtodosComponent implements OnInit {

  addTodoForm:FormGroup;
  todoList:any[]=[];
  selectedDate: any = '';
  category:string='';
  datePickerConfig = {
      format: 'DD-MM-yyyy',
      defaultOpen: false,
      showGoToCurrent: true
  }
  constructor(private fBuilder:FormBuilder,private apiService:ApiService,private router:Router)
  {

  }
    //get form controls
    get f()
    {
      return this.addTodoForm.controls;
    }
  selectCategory(event)
  {
    this.category=event.target.value;
  }
  addTodo()
  {
    var todoId = Math.floor(Math.random() * 100);
    var todo ={
      "task":this.f.Task.value,
      "category":this.category,
      "date":this.selectedDate,
      "userId":localStorage.getItem('userId'),
      "todoid":todoId,
      "isCompleted":false
    }
    var existing:any[] = JSON.parse(localStorage.getItem('todoList'));
    existing = existing ? existing : [];
    existing.push(todo);
    localStorage.setItem('todoList',JSON.stringify(existing));
    Swal.fire({
      title:'Todo',
      text:"Todo added successfully",
      icon:'success',
      timer:2500
    });
    this.apiService.upDateTodoList();
    this.addTodoForm.reset();
    this.selectedDate='';
    this.category='';
  }

  ngOnInit(): void {
        //Initalizing AddTodoForm
        this.addTodoForm=this.fBuilder.group({
          "Task":['',[Validators.required]],
        });
  }

}
