import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddTaskPage } from './pages/add-task/add-task.page';
import { HomePage } from './pages/home/home.page';
import { HistoryPage } from './pages/history/history.page';

const routes: Routes = [
  {
    path: '',
  component:HomePage
}
  ,
  {
    path:'add-task',
    component: AddTaskPage
  },
  {
    path: 'history',
    component:HistoryPage
  },
  // {
  //   path: '**',
  //   redirectTo: 'home',
  // },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
