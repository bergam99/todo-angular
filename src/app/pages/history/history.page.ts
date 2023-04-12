import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService, ITodo } from 'src/app/services/todo/todo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  doneTasks: ITodo[] = [];
  tasks: ITodo[] = [];


  constructor(private todoService: TodoService,  private router: Router) {
    this.doneTasks = this.todoService.getDoneTasks();
    console.log(this.doneTasks);
  }

  ngOnInit(): void {
    this.doneTasks = this.todoService.getDoneTasks();
    console.log(this.doneTasks);
  }

  showAddTaskForm() {
    if (this.tasks.length === 0) {
      this.router.navigate(['/add-task']);
    }}

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

          // Ajouter la tâche au tableau ades tâches terminées
          this.todoService.doneTasks.push(task);

          // Enregistrer les modifications dans le stockage local
          this.todoService.saveTasks();
        }
      }
    }
  // showAddTaskForm() {
  //   if (this.tasks.length === 0) {
  //     this.router.navigate(['/add-task']);
  //   }}
}
