import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddTaskPage } from '../../pages/add-task/add-task.page';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {

  constructor(private router:Router) { }



  ngOnInit() {}

}
