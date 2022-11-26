import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFriendsComponent } from './add-friends/add-friends.component';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ViewFriendComponent } from './view-friend/view-friend.component';

const myRoute:Routes=[
  {
    path:"",
    component:AddFriendsComponent
  },
  {
    path:"view",
    component:ViewFriendComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddFriendsComponent,
    NavBarComponent,
    ViewFriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
