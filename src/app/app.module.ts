import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { UsersComponent } from './users/users.component';
import { BioComponent } from './users/bio/bio.component';
import { UserHeaderComponent } from './users/user-header/user-header.component';
import { FriendsComponent } from './friends/friends.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { ProfileComponent } from './profile/profile.component';
import { PersonComponent } from './persons/person/person.component';
import { PersonListComponent } from './persons/person-list/person-list.component';
import { HeaderComponent } from './header/header.component';

import { UserService } from './users/shared/person.service';
import { PostService } from './posts/shared/post.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'friends', component: FriendsComponent },
  { path: 'friends/:text', component: FriendsComponent },
  { path: 'events',      component: EventsComponent }];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    CreatePostComponent,
    PostListComponent,
    UsersComponent,
    BioComponent,
    UserHeaderComponent,
    FriendsComponent,
    HomeComponent,
    EventsComponent,
    ProfileComponent,
    PersonComponent,
    PersonListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
