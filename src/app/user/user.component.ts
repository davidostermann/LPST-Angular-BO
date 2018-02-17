import { Component, OnInit } from '@angular/core';
import { User } from '../core/user';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../core/api.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getUser(id).subscribe((user: User) => {
      this.user = user;
    });
    this.apiService.userUpdate$.subscribe((user: User) => {
      this.user = user;
    });
  }
}
