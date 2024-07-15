import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { TodoRoutingModule } from './todo-routing.module';
import { NgIconsModule } from '@ng-icons/core';
import { heroXCircle } from '@ng-icons/heroicons/outline';

@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    NgIconsModule.withIcons({ heroXCircle })
  ],
  exports: [TodoListComponent],
})
export class TodoModule { }
