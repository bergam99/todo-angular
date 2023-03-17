import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  isPage1Active:boolean = false;
  isPage2Active:boolean = false;
  isPage3Active:boolean = false;

  // The constructor sets up the subscription to router events, by calling the subscribe method on the router.events observable.
  // The callback function receives the current value of the event, but in this case, it's not being used. Instead, the code checks the current route using the isActive method of the Router service.
  constructor(private router:Router) {
    this.router.events.subscribe((val) =>{
            // check if the current route matches each of your icon's links
            // logic for tracking which page is currently active. It uses the Angular Router service to subscribe to router events and update the "isPageXActive" properties accordingly.
            // isActive is not struck off, it is a valid method of the Router service in Angular
            // It is used to check whether a given route is currently active or not. It takes two parameters: the first is the route path, and the second is a boolean flag that indicates whether to check the exact route or any child routes as well. Here, the isActive method is used to check whether each of the three routes is currently active or not by passing in the respective route paths.
            this.isPage1Active = this.router.isActive('/', true);
            this.isPage2Active = this.router.isActive('/add-task', true);
            this.isPage3Active = this.router.isActive('/history', true);
    })
  }



  ngOnInit() {}



}



