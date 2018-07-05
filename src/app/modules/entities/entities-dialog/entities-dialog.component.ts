import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormControl } from '@angular/forms';
import { AutoUnsubscribeBase } from '@eagle6/core/auto-unsubscribe-base';
import { IEntity } from '@eagle6/models/entity';
import { EntitiesService } from '@eagle6/services/entities/entities.service';

import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-entities-dialog',
  templateUrl: './entities-dialog.component.html',
  styleUrls: ['./entities-dialog.component.scss'],
  providers: [EntitiesService]
})
export class EntitiesDialogComponent extends AutoUnsubscribeBase implements OnInit {

  selectedIds: number[] = [];
  entities: IEntity[] = [];
  autocomplete: FormControl = new FormControl();

  constructor(
    private entitiesService: EntitiesService,
    public dialogRef: MatDialogRef<EntitiesDialogComponent>
  ) {
    super();
  }

  ngOnInit() {
    this.searchSubscriber();
  }

  checkBoxHanlder(val: number): void {
    const idx = this.selectedIds.indexOf(val);
    if (idx === -1) {
      this.selectedIds.push(val);
    } else {
      this.selectedIds.splice(idx, 1);
    }
  }

  closeDialog(): void {
    this.dialogRef.close(null);
  }

  connectEntities(): void {
    this.dialogRef.close(this.selectedIds);
  }

  private searchSubscriber(): void {
    this.subs = this.autocomplete.valueChanges.pipe(
      switchMap(data => this.entitiesService.searchEntities(data))
    )
      .subscribe((data: IEntity[]) => {
        this.entities = data;
        this.selectedIds = [];
      });
  }
}
