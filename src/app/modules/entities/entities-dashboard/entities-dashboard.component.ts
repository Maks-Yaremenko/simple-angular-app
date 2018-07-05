import { Component, OnInit } from '@angular/core';

// Models
import { IEntity } from '@eagle6/models/entity';

// Services
import { DialogService } from '@eagle6/services/dialog/dialog.service';
import { EntitiesService } from '@eagle6/services/entities/entities.service';

// Other
import { filter, switchMap } from 'rxjs/operators';
import { AutoUnsubscribeBase } from '@eagle6/core/auto-unsubscribe-base';
import { EntitiesDialogComponent } from '../entities-dialog/entities-dialog.component';
import { EntitiesHelper } from '@eagle6/core/entities-helper';

@Component({
  selector: 'app-entities-dashboard',
  templateUrl: './entities-dashboard.component.html',
  styleUrls: ['./entities-dashboard.component.scss'],
  providers: [DialogService, EntitiesService]
})
export class EntitiesDashboardComponent extends AutoUnsubscribeBase implements OnInit {

  entitiesConnected = 0;
  entities: IEntity[] = [];

  constructor(
    private dialog: DialogService,
    private entitiesService: EntitiesService
  ) {
    super();
  }

  ngOnInit() {
    this.getEntitiesList();
  }

  showDialog(event) {
    event.stopPropagation();
    this.subs = this.dialog.custom(EntitiesDialogComponent, {}, {
      panelClass: 'app-connect-entity-dialog'
    })
    .pipe(
      filter(Boolean),
      switchMap((ids: number[]) => this.entitiesService.connectEntities(ids))
    )
    .subscribe((res: IEntity[]) => {
      this.updateEntityList(this.entities, res);
      this.getConnectedEntitiesCount(this.entities);
    });
  }

  disconnectHandler(req: number): void {
    this.entitiesService.disconnectEntitity(req).subscribe((res: IEntity) => {
      EntitiesHelper.entityFindAndSetFlagConnected(this.entities, res.id, false);
      this.getConnectedEntitiesCount(this.entities);
    });
  }

  private getConnectedEntitiesCount(entities: IEntity[]): void {
    let count = 0;
    entities.map((entity: IEntity) => {
      count += entity.connected === true ? 1 : 0;
    });
    this.entitiesConnected = count;
  }

  private getEntitiesList(): void {
    this.entitiesService.getEntitiesList().subscribe((entities: IEntity[]) => {
      this.getConnectedEntitiesCount(entities);
      this.entities = entities;
    });
  }

  private updateEntityList(entitiesList: IEntity[], data: IEntity[]): void {
    data.map(entity => {
      EntitiesHelper.entityFindAndSetFlagConnected(entitiesList, entity.id, true);
    });
  }
}
