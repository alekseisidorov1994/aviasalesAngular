import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Id, Ticket} from '../interfaces/interface';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class FetchService {
  constructor(private http: HttpClient) {
  }
  searchId() {
    return this.http.get<any>('https://front-test.beta.aviasales.ru/search');
  }
  getTickets(id: Id ): Observable<any> {
    return this.http.get<any>('https://front-test.beta.aviasales.ru/tickets', {
      params: new HttpParams().set('searchId', id.searchId)
    });

  }

}
