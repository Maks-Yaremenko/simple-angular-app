import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class EntitiesService {

  constructor(private http: HttpClient) { }

  getEntitiesList(): Observable<any> {
    return this.http.get('/api/entities');
  }

  connectEntities(ids: number[]): Observable<any> {
    return this.http.post('/api/entities/connect', {ids: ids});
  }

  disconnectEntitity(id: number): Observable<any> {
    return this.http.post('/api/entities/disconnect', {id: id});
  }

  searchEntities(query: string): Observable<any> {
    const params = new HttpParams().set('query', query);
    return this.http.get('/api/entities', { params: params });
  }
}
