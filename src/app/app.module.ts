import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostsByPersonComponent } from './posts/posts-by-person/posts-by-person.component';
import { UsersComponent } from './users/users.component';
import { BioComponent } from './users/bio/bio.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserHeaderComponent } from './users/user-header/user-header.component';
import { FriendsComponent } from './friends/friends.component';
import { FriendComponent } from './friends/friend/friend.component';
import { FriendListComponent } from './friends/friend-list/friend-list.component';
import { FriendInfoComponent } from './friends/friend-info/friend-info.component';
import { UserSearcherComponent } from './users/user-searcher/user-searcher.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { ProfileComponent } from './profile/profile.component';

import { UserService } from './users/shared/user.service';
import { PostService } from './posts/shared/post.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'friends', component: FriendsComponent },
  { path: 'events',      component: EventsComponent }];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    CreatePostComponent,
    PostListComponent,
    PostsByPersonComponent,
    UsersComponent,
    BioComponent,
    UserInfoComponent,
    UserListComponent,
    UserHeaderComponent,
    FriendsComponent,
    FriendComponent,
    FriendListComponent,
    FriendInfoComponent,
    UserSearcherComponent,
    HomeComponent,
    EventsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    UserService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
