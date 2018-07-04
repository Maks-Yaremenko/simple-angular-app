import { IEntity } from '@eagle6/models/entity';

export class EntitiesHelper {
  public static entityFindAndSetFlagConnected(entities: IEntity[], id: number, flag: boolean): IEntity {
    const idx = entities.findIndex(v => v.id === id);
    entities[idx].connected = flag;
    return entities[idx];
  }
}
