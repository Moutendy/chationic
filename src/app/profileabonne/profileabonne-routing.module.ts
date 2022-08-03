import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileabonnePage } from './profileabonne.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileabonnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileabonnePageRoutingModule {}
