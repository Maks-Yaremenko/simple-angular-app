import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';

// rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

// Other
import { IEntity } from '@eagle6/models/entity';
import { MockDataConfig } from '@eagle6/configs/mock-data.config';
import { EntitiesHelper } from '@eagle6/core/entities-helper';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  entities: IEntity[] = [];

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // get entities
      if (request.url.endsWith('/api/entities') && request.method === 'GET' && !request.params.has('query')) {
        if (!this.entities.length) {
          this.entities = MockDataConfig.entities;
        }
        return Observable.of(new HttpResponse({ status: 200, body: this.entities }));
      }

      // get entities / search
      if (request.url.endsWith('/api/entities') && request.method === 'GET' && request.params.has('query')) {
        const query = request.params.get('query');
        let result = [];
        if (query) {
          result = this.entities.filter(entity => entity.name.match(new RegExp(query, 'gi')));
        }
        return Observable.of(new HttpResponse({ status: 200, body: result }));
      }

      // connect entities
      if (request.url.endsWith('/api/entities/connect') && request.method === 'POST') {
        const result = [];
        const ids = request.body.ids;
        ids.forEach(id => result.push(EntitiesHelper.entityFindAndSetFlagConnected(this.entities, id, true)));
        return Observable.of(new HttpResponse({ status: 200 , body: result }));
      }

      // disconnect entitiy
      if (request.url.endsWith('/api/entities/disconnect') && request.method === 'POST') {
        const id = request.body.id;
        const entity = EntitiesHelper.entityFindAndSetFlagConnected(this.entities, id, false);
        return Observable.of(new HttpResponse({ status: 200 , body: entity}));
      }

      // pass through any requests not handled above
      return next.handle(request);
  }
}

export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
