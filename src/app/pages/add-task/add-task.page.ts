import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo/todo.service';
import { ITodo } from 'src/app/services/todo/todo.service';
import { CategoryType } from '../../services/todo/todo.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage {
  @ViewChild('myForm') myForm: any;
  categories = ['🛍️', '💊', '💼', '💸', '🧼', '🤷‍♀️'];
  task: ITodo = {
    id: 0,
    content: '',
    category: null,
    isUrgent: false,
    doneDate: null,
    isComplete:false,
  };
  isEditMode: boolean = false;

  // css




  constructor(
    private todoService: TodoService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    if (id) {
      const task = this.todoService.getTaskById(id);
      if (task) {
        this.task = task;
        this.isEditMode = true;
      }
    }
  }
  onSave(): void {
    this.todoService.updateTask(this.task);
    this.router.navigate(['/']);
  }

  onSubmit(): void {
    if (this.task.category) {
      if (this.task.content.trim().length > 0) {
        if (this.todoService.getTaskById(this.task.id)) {
          this.todoService.updateTask(this.task);
        } else {
          this.task.id = this.todoService.getNextId();
          this.todoService.addTask(this.task);
        }
        this.router.navigate(['/home']);
      }
    }
  }

  submitForm(): void {
    if (this.myForm.valid) {
      if (this.isEditMode) {
        this.todoService.updateTask(this.task);
      } else {
        this.task.id = this.todoService.getNextId();
        this.todoService.addTask(this.task);
      }
      this.router.navigate(['/home']);
    }
  }

  selectCategory(category: CategoryType) {
    this.task.category = category;
    localStorage.setItem('tasks', JSON.stringify(this.todoService.getTasks()));
  }
}
