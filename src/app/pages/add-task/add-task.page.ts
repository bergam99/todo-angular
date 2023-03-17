import { Component, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit() {
  }

}
