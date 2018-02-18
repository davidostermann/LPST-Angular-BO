import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';
import { switchMap, map, tap } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { Post } from './post';

const HOST = 'http://localhost:3000';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  userUpdate$ = new Subject<User>();

  getUsers(): Observable<any> {
    return this.http.get(`${HOST}/users`).pipe(
      tap(data => console.log(data))
      // map(data => data.users),
      // tap(data => console.log(data))
    );
  }

  getUser(id: number): Observable<any> {
    return this.http
      .get(`${HOST}/users/${id}`)
      .pipe(tap(data => console.log(data)));
  }

  createUser(user) {
    const u: User = {
      ...user,
      image: `https://dummyimage.com/360x220/DDF/fff/&text=${user.name}`,
      position: { lat: 48.861966, lng: 2.436404 }
    };
    console.log(`u = ${JSON.stringify(u)}`);

    return this.http
      .post(`${HOST}/users`, u)
      .pipe(tap(data => console.log(data)));
  }

  updateUser(user) {
    const u: User = {
      ...user,
      image: `https://dummyimage.com/360x220/DDF/fff/&text=${user.name}`
    };
    console.log(`u = ${JSON.stringify(u)}`);

    return this.http
      .put(`${HOST}/users/${user.id}`, u)
      .pipe(
        tap(data => console.log(data)),
        tap(data => this.userUpdate$.next(data as User))
      );
  }

  getUserPosts(id): Observable<Post[]> {
    return this.http
      .get(`${HOST}/users/${id}/posts`)
      .pipe(tap(data => console.log(data))) as Observable<Post[]>;
  }

}
