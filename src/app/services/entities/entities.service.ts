import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { IEntity } from '../../models/entity';
import { MockDataConfig } from '../../configs/mock-data.config';

@Injectable()
export class EntitiesService {

  constructor() { }

  getEntitiesList(): Observable<Array<IEntity>> {
    return Observable.of(MockDataConfig.entities).delay(500);
  }
}
