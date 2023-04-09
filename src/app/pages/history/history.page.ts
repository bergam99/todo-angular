import { Component, OnInit } from '@angular/core';
import { TodoService, ITodo } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  doneTasks: ITodo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.doneTasks = this.todoService.getDoneTasks();
    // const storedTasks = localStorage.getItem('doneTasks');
    // if (storedTasks) {
    //   this.doneTasks = JSON.parse(storedTasks);
    }
  }
  // saveDoneTask(task: ITodo) {
  //   this.doneTasks.push(task);
  //   localStorage.setItem('doneTasks', JSON.stringify(this.doneTasks));
  // }
  // getDoneTasks(): ITodo[] {
  //   return this.todoService.getDoneTasks();

  // }
// }
