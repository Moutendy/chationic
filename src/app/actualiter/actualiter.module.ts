import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualiterPageRoutingModule } from './actualiter-routing.module';

import { ActualiterPage } from './actualiter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualiterPageRoutingModule
  ],
  declarations: [ActualiterPage]
})
export class ActualiterPageModule {}
