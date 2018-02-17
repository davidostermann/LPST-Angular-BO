import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';
import { switchMap, map, tap } from 'rxjs/operators';

const HOST = 'http://localhost:3000';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(`${HOST}/users`).pipe(
      tap(data => console.log(data)),
      // map(data => data.users),
      // tap(data => console.log(data))
    );
  }

}
