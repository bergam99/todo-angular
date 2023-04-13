import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITodo, TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-length0',
  templateUrl: './length0.component.html',
  styleUrls: ['./length0.component.scss'],
})
export class Length0Component  implements OnInit {
  @Input() emptyText: string='';
  @Input() buttonText: string='';
  // doneTasks: ITodo[] = [];
  tasks: ITodo[] = [];


  constructor(private todoService: TodoService, private router: Router) {

  }
  ngOnInit() {}
  showAddTaskForm() {
    if (this.tasks.length === 0) {
      this.router.navigate(['/add-task']);
    }}
}


