import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserRoleMapping } from '../Interface/UserRoleMapping';


@Injectable({
  providedIn: 'root'
})
export class UserRoleMappingService {

  constructor(private _http : HttpClient) {}

  baseUrl = "http://localhost:5281/api/userRoleMappings/";


  GetUserRoleMapping()
  {
   return this._http.get<UserRoleMapping[]>(this.baseUrl);
  }

  GetUserRoleMappingById()
  {

  }
  AddUserRoleMapping(userRoleMapping : UserRoleMapping)
  {
    console.log("inside the userrole.ts file addrolemapping ");
    return this._http.post<UserRoleMapping>(this.baseUrl,JSON.stringify(userRoleMapping), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
  )
  
} 
  EditUserRoleMApping(id : number , userRoleMapping : UserRoleMapping)
  {
    return this._http.put<UserRoleMapping>(this.baseUrl +id , userRoleMapping)
  }

  DeleteUserRoleMapping(id : number)
  {
      return this._http.delete<UserRoleMapping>(this.baseUrl + id);
  }



}
