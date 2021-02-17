import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowtodoComponent } from './showtodo/showtodo.component';
import { AddtodosComponent } from './addtodos/addtodos.component';
import { TodoroutingModule } from './todorouting.module';
import { TodocomponentComponent } from './todocomponent/todocomponent.component';
import {DpDatePickerModule} from 'ng2-date-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../service/api.service';

@NgModule({
  declarations: [ShowtodoComponent, AddtodosComponent,TodocomponentComponent],
  imports: [
    CommonModule,
    TodoroutingModule,
    DpDatePickerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[ApiService]
})
export class TodoModule { }
