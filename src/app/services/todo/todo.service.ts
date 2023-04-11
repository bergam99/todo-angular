import { Injectable } from '@angular/core';

export type CategoryType =
  | 'shopping'
  | 'health'
  | 'work'
  | 'bills'
  | 'cleaning'
  | 'other';

export interface ITodo {
  id: number;
  content: string;
  category: CategoryType | null;
  isUrgent: boolean;
  doneDate: Date | null;
  isComplete:boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly doneTasksKey = 'doneTasks';

  public tasks: ITodo[] = [];
  public doneTasks: ITodo[] = []; // Nouveau tableau pour stocker les tâches terminées

  constructor() {
    const doneTasks = localStorage.getItem('doneTasks');
    if (doneTasks) {
      this.doneTasks = JSON.parse(doneTasks);
    }
  }

  // addTask(task: ITodo): void {
  //   this.tasks.push(task);
  //   localStorage.setItem('tasks', JSON.stringify(this.tasks));
  // }
  addTask(task: ITodo): void {
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.tasks = this.getTasks(); // update this.tasks with the newly added task
  }

  getTasks(): ITodo[] {
    const tasksString = localStorage.getItem('tasks');
    if (tasksString) {
      this.tasks = JSON.parse(tasksString);
    }
    return this.tasks.filter((task) => task.doneDate === null);
  }
  getTaskById(id: number): ITodo | undefined {
    return this.tasks.find((task) => task.id === id);
  }
  updateTask(updatedTask: ITodo): void {
    const index = this.tasks.findIndex((t) => t.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = { ...updatedTask };
      this.saveTasks();
    }
  }
   saveTasks(): void {
    const tasksJson = JSON.stringify(this.tasks);
    localStorage.setItem('tasks', tasksJson);
  }
  getNextId(): number {
    return this.tasks.length > 0
      ? Math.max(...this.tasks.map((task) => task.id)) + 1
      : 1;
  }


  getDoneTasks(): ITodo[] {
    const doneTasksString = localStorage.getItem(this.doneTasksKey);
    if (!doneTasksString) {
      return [];
    }
    return JSON.parse(doneTasksString);
  }

  addDoneTask(task: ITodo): void {
    const doneTasks = this.getDoneTasks();
    doneTasks.push(task);
    localStorage.setItem(this.doneTasksKey, JSON.stringify(doneTasks));
  }


}
