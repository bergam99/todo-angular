import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}


  addTask(task: string) {
    let tasks: string[] = [];
    const storedTasks = localStorage.getItem('tasks');

    if (storedTasks) {
      tasks = JSON.parse(storedTasks);
    }

    tasks.unshift(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // get the tasks from local storage and then return them. Then, in the Home component, you can call this function and assign the returned value to a property, which can then be used to display the tasks in the HTML.
  getTasks(): string[] {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      return JSON.parse(storedTasks);
    }
    return [];
  }
}
