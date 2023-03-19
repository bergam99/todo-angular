import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tasks:string[]=[];

  constructor(private todoService:TodoService) { }

  ngOnInit(){
    this.tasks = this.todoService.getTasks();
  }
}
