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
  tasks: ITodo[] = [];
  category: string = '';

  constructor(private todoService: TodoService, private router: Router) {
    this.tasks = this.todoService.getTasks();
  }

  // ngOnInit récupère la liste des tâches en appelant la méthode getTasks() du service.  Ensuite, la liste de tâches est assignée à la propriété tasks du composant.
  ngOnInit() {
    this.tasks = this.todoService.getTasks();

    // this.tasks = this.todoService.getTasks();
    // this.category = this.todoService.getCategory();
  }
  editTask(id: number): void {
    this.router.navigate(['/edit-task', id]);
  }

  onCheckboxClick(event: Event, task: ITodo) {
    // Empêcher le lien de la case à cocher de rediriger la page
    event.stopPropagation();

    task.isComplete = !task.isComplete;
    if (task.isComplete) {
      task.doneDate = new Date(); // Initialiser la propriété doneDate avec la date actuelle
      const index = this.tasks.indexOf(task);
      if (index !== -1) {
        // Supprimer la tâche du tableau des tâches non terminées
        this.tasks.splice(index, 1);

        // Ajouter la tâche au tableau des tâches terminées
        this.todoService.doneTasks.push(task);

        // Enregistrer les modifications dans le stockage local
        this.todoService.saveTasks();
      }
    }
  }

}
