import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Material
import {
  MatButtonModule, MatCheckboxModule, MatDialogConfig, MatDialogModule,
  MatExpansionModule, MatFormFieldModule, MatInputModule
} from '@angular/material';

// Components
import { EntitiesDashboardComponent } from './entities-dashboard/entities-dashboard.component';
import { EntitiesDialogComponent } from './entities-dialog/entities-dialog.component';
import { EntityElementComponent } from './entity-element/entity-element.component';

// Other
import { EntitiesRoutingModule } from './entities-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EntitiesRoutingModule,

    // Material modules
    MatDialogModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [MatDialogConfig],
  entryComponents: [EntitiesDialogComponent],
  declarations: [EntitiesDashboardComponent, EntitiesDialogComponent, EntityElementComponent]
})
export class EntitiesModule { }
