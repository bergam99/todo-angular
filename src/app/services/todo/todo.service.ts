import { Injectable } from '@angular/core';

export type CategoryType = "shopping" | "health" | "work" | "bills" | "cleaning" | "other";

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

  constructor() { }

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
    return this.tasks.find(task => task.id === id);
  }

//   private selectedCategory: string='';


//   constructor() {}
//   setCategory(category: string) {
//     this.selectedCategory = category;
//     localStorage.setItem('selectedCategory', category);
//   }
//   getCategory() {
//     if (!this.selectedCategory) {
//       this.selectedCategory = localStorage.getItem('selectedCategory') || '';
//     }
//     return this.selectedCategory;
//   }
// //  functuon that adds the new ITodo object to the end of the array using push method.
//   // 새 작업을 추가하고 로컬 스토리지에 저장하는 함수.
//   addTask(task: ITodo) {
//     let tasks: ITodo[] = [];
//     const storedTasks = localStorage.getItem('tasks');
//     // if (storedTasks) 구문은 로컬 스토리지에서 "tasks" 키로 저장된 값이 있는지 확인합니다. 값이 있으면 JSON.parse() 함수를 사용하여 문자열을 JavaScript 배열 객체로 변환합니다. 변환된 배열은 tasks 변수에 할당됩니다.
//     if (storedTasks) {
//       tasks = JSON.parse(storedTasks);
//     }
//     tasks.push(task);

// // tasks.unshift(task); 코드는 파라미터로 전달된 작업을 배열의 맨 앞에 추가합니다.
//     // tasks.unshift(task);
// // "tasks" 키로 변경된 작업 목록을 로컬 스토리지에 저장합니다.
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   }

// // function that returns the array of ITodo objects as is, without any additional processing.
//   // get the tasks from local storage and then return them. Then, in the Home component, you can call this function and assign the returned value to a property, which can then be used to display the tasks in the HTML.
//   getTasks(): ITodo[] {
//     const storedTasks = localStorage.getItem('tasks');
//     // if (storedTasks) 구문은 로컬 스토리지에서 "tasks" 키로 저장된 값이 있는지 확인합니다. 값이 있으면 JSON.parse() 함수를 사용하여 문자열을 JavaScript 배열 객체로 변환합니다. 변환된 배열은 함수에서 반환됩니다.
//     if (storedTasks) {
//       return JSON.parse(storedTasks) as ITodo[];
//     }
//     return [];
//   }
}
