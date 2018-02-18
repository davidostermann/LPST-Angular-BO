import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../core/api.service';
import { Post } from '../../core/post';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  posts$: Observable<Post[]>;

  ngOnInit() {
    const id = +this.route.parent.snapshot.paramMap.get('id');
    console.log(`id : ${id}`);

    this.posts$ = this.apiService.getUserPosts(id);
  }
}
