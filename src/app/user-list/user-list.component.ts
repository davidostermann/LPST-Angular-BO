import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';
import { of } from 'rxjs/observable/of';
import { interval } from 'rxjs/observable/interval';
import { map, switchMap, delay } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { User } from '../core/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  constructor(public apiService: ApiService) {}

  users$: Observable<User[]> = this.apiService.getUsers();

  ngOnInit() {}
}
