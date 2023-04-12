import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService, ITodo } from 'src/app/services/todo/todo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  doneTasks: ITodo[] = [];
  tasks: ITodo[] = [];


  constructor(private todoService: TodoService,  private router: Router) {
    this.doneTasks = this.todoService.getDoneTasks();
    console.log(this.doneTasks);
  }

  ngOnInit(): void {
    this.doneTasks = this.todoService.getDoneTasks();
    console.log(this.doneTasks);

  }

  // showAddTaskForm() {
  //   if (this.tasks.length === 0) {
  //     this.router.navigate(['/add-task']);
  //   }}
}
