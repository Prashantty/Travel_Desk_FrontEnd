import { Component , OnInit } from '@angular/core';
import { UserRoleMappingService } from '../Services/user-role-mapping.service';
import { UserRoleMapping } from '../Interface/UserRoleMapping';

@Component({
  selector: 'app-user-role-mapping',
  templateUrl: './user-role-mapping.component.html',
  styleUrls: ['./user-role-mapping.component.css']
})
export class UserRoleMappingComponent implements OnInit {

  constructor(private _userRole : UserRoleMappingService) {  }

  userRoleMoppings :UserRoleMapping[] =[];
  userRoleMapping :UserRoleMapping = {UserId : '', RoleId :'' , DepartmentId :'', Createdby:'',  ModifiedBy:'' ,  IsActive :''};

  ngOnInit(): void {
    this.GetUserRoleMapping();
     this.AddUserRoleMapping();
  }

  GetUserRoleMapping()
  {
     this._userRole.GetUserRoleMapping().subscribe(res => console.log(res)); 
  }

  AddUserRoleMapping()
  {
    console.log("inside the AddUserRoleMapping")
   
    this.userRoleMapping = {UserId : 1 , RoleId : 1 , DepartmentId : 1 , Createdby: 'Prashant' ,  ModifiedBy:'Prashant' ,  IsActive :1};
    this._userRole.AddUserRoleMapping(this.userRoleMapping).subscribe(res => console.log(res))
    console.log(this.userRoleMapping);
  }

  EditUserRoleMApping()
  {
    
    this.userRoleMapping = {UserId : 1 , RoleId : 1 , DepartmentId : 1 , Createdby: 'Prashant' ,  ModifiedBy:'Ashutosh' ,  IsActive :1};
    this._userRole.EditUserRoleMApping(1 , this.userRoleMapping).subscribe(res => console.log(res));
  }

  DeleteUserRoleModel()
  {
    this._userRole.DeleteUserRoleMapping(1);
  }

}
