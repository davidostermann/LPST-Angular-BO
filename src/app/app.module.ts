import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { RoutingModule } from './/routing.module';
import { MatModule } from './/mat.module';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { ApiService } from './core/api.service';
import { UserItemComponent } from './user-list/user-item/user-item.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserPostsComponent } from './user/user-posts/user-posts.component';

@NgModule({
  declarations: [AppComponent, ContentComponent, UserComponent, UserListComponent, PostListComponent, PostComponent, UserItemComponent, UserFormComponent, UserPostsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    FlexLayoutModule,
    MatModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
