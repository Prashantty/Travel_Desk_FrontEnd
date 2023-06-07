import { Component , OnInit} from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Credential } from '../Credential';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{


constructor(private _auth : AuthenticationService) {}  


credential : Credential = {Email:0, Password:0};

  ngOnInit(): void {
  
  }

  
  Login(regForm:any)
  {
    this.credential = {Email:regForm.controls.txtName.value, Password:regForm.controls.passname.value};
     this._auth.Authenticate(this.credential).subscribe(res=>
      console.log(res))
      
    console.log("inside Authenticate ");
  }

  Register(regForm:any)
  {

    // this.credential = {Email:'regForm.controls.txtName.value', Password:'regForm.controls.passname.value'}; 
    // console.log(this.credential);
    // console.log(regForm)
    // console.log(regForm.value)
    // console.log(regForm.controls.txtName.value)
  }


}
