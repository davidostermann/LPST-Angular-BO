import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserPostsComponent } from './user/user-posts/user-posts.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users' },
  { path: 'users', component: UserListComponent },
  { path: 'user/create', component: UserFormComponent },
  { path: 'user/:id', component: UserComponent, children: [
    { path: 'posts', component: UserPostsComponent},
    { path: 'edit', component: UserFormComponent}
  ] },
  { path: 'posts', component: PostListComponent },
  { path: 'post/:id', component: PostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class RoutingModule {}
