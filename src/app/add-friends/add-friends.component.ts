import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.css']
})
export class AddFriendsComponent {
  name=""
  friendName=""
  DescribeYourFriend=""
  friendNickName=""

  constructor(private api:ApiService){}

  readValue=()=>
  {
   let data:any= {"name":this.name,"friendName":this.friendName,"DescribeYourFriend":this.DescribeYourFriend,"friendNickName":this.friendNickName}
   console.log(data)
   this.api.addFriend(data).subscribe(
    (response:any)=>{
      console.log(response)
      if (response.status=="success"){
        alert("friend added successfully")
        this.name=""
        this.friendName=""
        this.DescribeYourFriend=""
        this.friendNickName=""
      }
      else{
        alert("something went wrong")
      }
    }
   )
  }

}
