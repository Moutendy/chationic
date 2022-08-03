import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileabonnePageRoutingModule } from './profileabonne-routing.module';

import { ProfileabonnePage } from './profileabonne.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileabonnePageRoutingModule
  ],
  declarations: [ProfileabonnePage]
})
export class ProfileabonnePageModule {}
