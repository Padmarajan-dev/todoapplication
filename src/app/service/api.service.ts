import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  users= [
    {
      "id": 1,
      "username": "raju",
      "email": "rajussp31121997@gmail.com"
    },
    {
      "id": 2,
      "username": "rajan",
      "email": "rajanamc311297@gmail.com"
    }
  ];
    //for get TODOLIST from LocalStorage
  todoList=JSON.parse(localStorage.getItem('todoList'));
  // url:string=' http://localhost:3000/users';
  todos=new BehaviorSubject<any>(this.todoList);
  constructor() { 
  }

  //taskcompleted
  taskCompleted(userid,todoid)
  {
    var todoList=JSON.parse(localStorage.getItem('todoList'));
    todoList.map(e=>{
      if(e.userId==userid && e.todoid==todoid)
      {
        e.isCompleted=true;
      }
    });
    localStorage.setItem('todoList',JSON.stringify(todoList));
    this.todos.next(todoList);
  }



  //casting TodoList
castTodo():Observable<any>
{
  return this.todos.asObservable();
}
 
//update todoList while add a new todo
upDateTodoList()
{
  var todoList=JSON.parse(localStorage.getItem('todoList'));
  this.todos.next(todoList);
}

  //return users
  getUsers():any{
    return this.users;
  }


}
