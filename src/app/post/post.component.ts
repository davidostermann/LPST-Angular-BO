import { Component, OnInit } from '@angular/core';
import { Post } from '../core/post';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getPost(id).subscribe((post: Post) => {
      this.post = post;
    });
  }

  delete(id) {

  }
}
