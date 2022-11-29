import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFriendsComponent } from './add-friends/add-friends.component';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ViewFriendComponent } from './view-friend/view-friend.component';
import { SearchFriendComponent } from './search-friend/search-friend.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const myRoute:Routes=[
  {
    path:"",
    component:AddFriendsComponent
  },
  {
    path:"view",
    component:ViewFriendComponent
  },
  {
    path:"search",
    component:SearchFriendComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddFriendsComponent,
    NavBarComponent,
    ViewFriendComponent,
    SearchFriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
