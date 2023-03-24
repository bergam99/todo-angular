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
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public tasks: ITodo[] = [];

  constructor() {}

  addTask(task: ITodo): void {
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  getTasks(): ITodo[] {
    const tasksString = localStorage.getItem('tasks');
    if (tasksString) {
      this.tasks = JSON.parse(tasksString);
    }
    return this.tasks;
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
  private saveTasks(): void {
    const tasksJson = JSON.stringify(this.tasks);
    localStorage.setItem('tasks', tasksJson);
  }
  getNextId(): number {
    return this.tasks.length > 0
      ? Math.max(...this.tasks.map((task) => task.id)) + 1
      : 1;
  }
}
