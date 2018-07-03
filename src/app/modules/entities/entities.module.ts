import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesDashboardComponent } from './entities-dashboard/entities-dashboard.component';
import { EntitiesDialogComponent } from './entities-dialog/entities-dialog.component';
import { EntitiesRoutingModule } from './entities-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EntitiesRoutingModule
  ],
  declarations: [EntitiesDashboardComponent, EntitiesDialogComponent]
})
export class EntitiesModule { }
