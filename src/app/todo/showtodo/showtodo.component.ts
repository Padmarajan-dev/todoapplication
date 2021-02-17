import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery' 
import { DatePickerComponent } from 'ng2-date-picker';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-showtodo',
  templateUrl: './showtodo.component.html',
  styleUrls: ['./showtodo.component.scss']
})
export class ShowtodoComponent implements OnInit {
  //for datepicker 
  // selectedDate: any = '';
  //for store filtered todo items 
  filter:boolean=false;
  filteredTodos=[];
  //
//   datePickerConfig = {
//     format: 'DD-MM-yyyy',
// }
  todoList:any=[];
  constructor(private Apiservice:ApiService) { 

  }
  //func for if task is completed
  isCompleted(userId,todoId)
  {
    this.Apiservice.taskCompleted(userId,todoId);
  }
  ngOnInit(): void {
   this.Apiservice.castTodo().subscribe(res=>{
    this.todoList = res.filter(e=>e.userId==localStorage.getItem('userId'));
    this.filteredTodos = res.filter(e=>e.userId==localStorage.getItem('userId'));
   })
  }

  //func for filter todos
  filterTodo(event)
  {
    if(event.target.value!='')
    {
    this.filter=true
    console.log(event.target.value.toLocaleLowerCase())  
    var filteredTodos = this.filteredTodos.filter(e=>{
     return e.task.toLowerCase()==event.target.value.toLocaleLowerCase() || e.category.toLowerCase()==event.target.value.toLocaleLowerCase();
    });
    filteredTodos.length>0?this.filteredTodos=filteredTodos : this.filteredTodos=this.todoList;
    console.log(this.filteredTodos);
    }else 
    {
      this.filter = false;
      this.filteredTodos=this.todoList;  
      console.log(this.filteredTodos);
    }
  }




}
