import { Component, OnInit } from '@angular/core';
import { TodoService} from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {
  isShoppingSelected:boolean = false;
  isInscureSelected:boolean = false;
  isWorkSelected:boolean = false;
  isBrokedSelected:boolean = false;
  isCleanSelected:boolean = false;
  isAnotherSelected:boolean = false;


  todoItem: string;
  todoItemArray:string[]=[];

  constructor(private todoService: TodoService) {
    this.todoItem = todoService.todoItem;
  }


  ngOnInit() {
  }

  addItem() {
    this.todoService.addItem(this.todoItem);
    this.todoItem = '';
  }

}
