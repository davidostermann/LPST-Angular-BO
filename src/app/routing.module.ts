import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { PostListComponent } from './post-list/post-list.component';

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users' },
  { component: UserListComponent, path: 'users' },
  { component: PostListComponent, path: 'posts' },
  // { component: UserComponent, path: 'user/:id' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class RoutingModule {}
