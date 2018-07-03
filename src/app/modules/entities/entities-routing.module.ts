import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntitiesDashboardComponent } from './entities-dashboard/entities-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: EntitiesDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntitiesRoutingModule {
}
