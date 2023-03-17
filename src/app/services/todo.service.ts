import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoItem:string = '';
  todoItemArray:string[]=[];

  constructor() { }

  addItem(item: string) {
    this.todoItemArray.push(item);
  }

}
