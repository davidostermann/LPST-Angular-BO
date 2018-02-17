import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserPostsComponent } from './user/user-posts/user-posts.component';
import { PostListComponent } from './post-list/post-list.component';

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users' },
  { component: UserListComponent, path: 'users' },
  { component: UserFormComponent, path: 'user/create' },
  { component: UserComponent, path: 'user/:id', children: [
    { path: 'posts', component: UserPostsComponent},
    { path: 'edit', component: UserFormComponent}
  ] },
  { component: PostListComponent, path: 'posts' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class RoutingModule {}
