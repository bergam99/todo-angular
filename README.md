# ANGULAR TODO PROJET 📝

* Fonctionnalités

  L'application permet de :

  * Ajouter une tâche à la liste des choses à faire
  * Marquer une tâche comme terminée
  * Supprimer une tâche de la liste
  * Voir la liste des tâches à faire et celles déjà terminées


* Utilisation 

  * Cloner ce dépôt de code sur votre machine locale
  * Exécuter npm install pour installer les dépendances
  * Exécuter ng s -o pour lancer l'application

---

### Fichiers

* Dans ce projet, il y a :

  - 3 pages :
    - home
    - add-task
    - history

  - 3 composant :
    - header
    - footer
    - length0

  - 1 service : 
    - todo.service

---

### Pages 

###### Home : 

  - Home page permet d'afficher les tâches qui sont ajoutées depuis "add-task" page.

  - S'il y a 0 tâche, afficher le composant "app-length0" en envoyant son contenue (emptyText & buttonText) via @Input.

  - Prendre les tâches via "getTasks" venant de todo.service seulement les tâches qui ont task.isComplete === false  && task.doneDate === null.

  - S'il y a plus d'une tâche, afficher les tâches en bouclant sur "tasks".

  - Quand on click sur une tâche, Afficer add-task form grâce à "editTask()" function.

  - A chaque fois qu'on click sur checkbox, executer onCheckboxClick() qui fait switch "isComplete" et genérér la date de doneDate, et les supprimer & enregistrer dans le service. 

---

###### Add-task :

  - "ngModel" prend en compte le changement de la valeur d'input et la mets à jours grâce à son two-way-data-binding.

  - La partie CATEGORY et TEXTAREA sont obligatoire grâce à "required"

  - ViewChild fait référancier d'input. Ici, ViewChild permet de vider le champ quand on submit.

  - Quand on submit, genérér random Id et enregistrer dans todo.service.

  - Si c'est EditMode alors update() task, sinon addTask().

  - Si EditMode, afficher le button Valider ma tâche, sinon Modifier ma tâche.

  - Si required forms sont non remplis, alors avoir opacity.

---

###### History :

  - Comme dans Home page, s'il y a plus d'une tâche, alors afficher la list de tasks, sinon, s'il y a 0 tâche alors afficher "app-length0" component en envoyant son contenue via @Input.

  - History page ramène et affiche getDoneTasks() depuis la service qui filtre "isComplete === true" et range les tâches selon leur "doneDate" en utilisant sort().

  - A chaque fois qu'on click sur checkbox, grâce à onCheckboxclick(), switch "isComplete" et enregistrer dans la service.

---
### Composants

###### Header :

  - header et footer sont applés dans "app" pour les afficher sur toutes les pages.

###### Footer : 

  - générer les paths et changer la couleur selon le path.

###### Length0 : 

  - Grâce à *ngIf, il est affiché sur home & history page seulement quand il y a pas de task. 

  - il reçoit les contenues dans "div" et "button" grâce à "@Input" et son interpollation

  - il affiche addTask form quand on click sur le button grâce à showAddTaskForm().

---
  ### service

  ###### Todo.service :

  - il fait rassembler les datas et les disperser.

  - il fait le rôle de passerelle des datas
