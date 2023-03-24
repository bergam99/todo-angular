import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo/todo.service';
import { ITodo } from 'src/app/services/todo/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tasks:ITodo[]=[];
  category:string='';

  constructor(private todoService:TodoService, private router: Router) { }


// ngOnInit récupère la liste des tâches en appelant la méthode getTasks() du service.  Ensuite, la liste de tâches est assignée à la propriété tasks du composant.
  ngOnInit(){
    this.tasks = this.todoService.getTasks();

    // this.tasks = this.todoService.getTasks();
    // this.category = this.todoService.getCategory();
  }
  editTask(id: number): void {
    this.router.navigate(['/edit-task', id]);

  }


}
