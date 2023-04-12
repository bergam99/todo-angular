import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryPageRoutingModule } from './history-routing.module';

// import { HistoryPage } from './history.page';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // HistoryPageRoutingModule,
    BrowserModule
  ],
  // declarations: [HistoryPage],
  schemas: [NO_ERRORS_SCHEMA]

})
export class HistoryPageModule {}
