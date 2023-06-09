import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.css']
})
export class HomeNavComponent implements OnInit {
loggedIn = false;
token:any;
ngOnInit(): void {
  console.log("init")
 this.token= localStorage.getItem("token");
 console.log("aaA"+ this.token)
 if(this.token!=null)
 {

  this.loggedIn=true;
  console.log("Looged ")
 }
 else 
 this.loggedIn=false;
}

logout()
{
  localStorage.removeItem("token");
  console.log("logout")
  this.loggedIn=false;

}

}
