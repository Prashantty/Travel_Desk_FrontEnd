import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Credential} from 'src/app/Credential'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _http : HttpClient) { }

  BaseUrl = "http://localhost:5281/api/Authentication/";

  Authenticate(credential : Credential)
  {
    console.log(credential)
    return this._http.post<Credential>(this.BaseUrl, 
      JSON.stringify(credential), {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      }
    )}

}
