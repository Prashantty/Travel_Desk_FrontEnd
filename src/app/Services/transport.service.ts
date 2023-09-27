import { Injectable } from '@angular/core';
import { Transport } from '../Interface/Transport';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  
  constructor(private _http:HttpClient) { }
  baseUrl="https://localhost:7044/api/TransportDetails/";
  GetTransportDetails() 
  {
    return this._http.get<Transport[]>(this.baseUrl);
  }
  GetTransportDetailsById(Id : number)
  {
    return this._http.get<Transport>(this.baseUrl + Id)
  }

  AddTransportDetails(transport:Transport){
  //   console.log( 'hoiumugtvy'+JSON.stringify(transport))
  //  // console.log("In ser "+ transport.adharCardNo);
  //   return this._http.post<Transport>(this.baseUrl,
  
  //      JSON.stringify(transport), {
  //         headers: new HttpHeaders({
    
  //            'Content-Type': 'application/json',
    
  //            'Accept': 'application/json'
    
  //           })
    
  // })

  console.log(transport);
  return this._http.post<Transport>(this.baseUrl, 
    
    JSON.stringify(transport), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
  )
  
  
  }


  

}
