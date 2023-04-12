import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryPage } from './history.page';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: HistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HistoryPageRoutingModule {}
