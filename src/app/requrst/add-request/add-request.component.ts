import { Component ,OnInit } from '@angular/core';
import { Request } from 'src/app/Interface/request';
import { RequestService } from 'src/app/Services/request.service';
import { FormBuilder, FormGroup , Validator , NgForm , FormControl } from '@angular/forms';
import { Transport } from 'src/app/Interface/Transport';
import { Hotel } from 'src/app/Interface/Hotel';
import { HotelService } from 'src/app/Services/hotel.service';
import { Common } from 'src/app/Interface/Common';
import { CommonServicesService } from 'src/app/Services/common-services.service';
import { MealPreference } from 'src/app/Interface/MealPreference';
import { HttpClient } from '@angular/common/http';
import { NoOfMeals } from 'src/app/Interface/NoOfMeals';
import { Router } from '@angular/router';
import { TransportService } from 'src/app/Services/transport.service';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { CommonTypeService } from 'src/app/Services/common-type.service';






@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent  implements OnInit{
  constructor(private _reqService : RequestService, private formBuilder: FormBuilder,private _transportservice : TransportService,private _hotelservice:HotelService , private _commontype : CommonTypeService,
    private _commonservice:CommonServicesService, private router:Router,private authservice:AuthenticationService) {}
  mealpreference: MealPreference[]=[];
  noofmeals:NoOfMeals[]=[];
  requestId = 0;
  project : Common[]= [];
  city : Common[] =[];

  
  
  selectedBookingType: string = '';
  
  ngForm !: FormGroup;

  ngOnInit() : void{
    this.GetMealPreference();
    this.GetNoOfMeals();
    this.onProjectChange();
    this.onCityChange();
   }
  
  request = new Request();
 
  GetMealPreference(){
    this._commonservice.GetMealPreference().subscribe(
      (res)=>{
        this.mealpreference=res;
      }
    )
  }

mealId = 16;
  updateMeal(e :any)
  {
    this.mealId = e.target.value
  }
  GetNoOfMeals(){
    this._commonservice.GetNoOfMeals().subscribe(
      (res)=>{
        this.noofmeals=res;
        console.log(this.noofmeals);
      }
    )
  }
  mealcombo =17;
  updateMealcombo(e :any)
  {
    this.mealcombo = e.target.value
  }

 

  AddRequest(form : any){
       
  this.request={
    requestId:0,
    
      userId :this.authservice.getUserId(),
      //userId :2,
      projectId:8,
      reasonForTraveling:form.controls.reason.value,
      statusId:9,
      managerId:4,
      //documentId:1,
      //AadharNumber:form.controls.adhaar.value,
      createdBy:"Prashant",
      createdDate:Date.now,
      modifiedBy:null,
      modifiedDate:Date.now,
      isActive:true,
     
      typeOfBookingId :form.controls.flightSelection.value

      
   }
  // console.log(form.controls.projectId.value);
  // console.log(this.request);
  // console.log(form.controls.CityId.value);
  this._reqService.AddRequest(this.request).subscribe(res=>
    
    {
     
   //   console.log(res.requestId);
      console.log(form.value);
     this.requestId=res.requestId;
      console.log(form.controls.bookingType.value);
      
  // console.log(form.controls.from.value);
  // console.log(form.controls.to.value);
      if(form.controls.bookingType.value =="Flight"){
      this.AddTransportDetails(form);
      this.router.navigate(["/common"]);
      }
      else if(form.controls.bookingType.value =="Hotel"){
      this.AddHotelDetails(form);
      this.router.navigate(["/common"]);
      }
      else{
        this.AddTransportDetails(form);
        this.AddHotelDetails(form);
        this.router.navigate(["/common"]);
      }

    })

}

transport =new Transport();

AddTransportDetails(form : any){
  //var x = 10;
  console.log(form.value);

  //var tflag = false;
//    if(form.controls.flightSelection.value=="international"){
// x = 11;
//   }

  // console.log(form.controls.from.value);
  // console.log(form.controls.to.value);

  this.transport={

    requestId :this.requestId,
    //internationalTrvel:form.controls.flightSelection.value,
    //domesticTravel:form.controls.//flightSelection.value,
    travelDateFrom:"2023-09-08",
    travelDateTo:"2023-08-08",
    // travelFrom:null,
     travelFromId:this.CityId,
     documentId : 1,
   // travelFromId: 17,
    // travelTo:null,
    travelToId:this.CityId,
   //travelToId : 18,
    visaNumber:form.controls.visaNumber.value,
    passportNumber:form.controls.passportNumber.value,
   aadharNumber:form.controls.adhaar.value,
    createdBy:"ajay",
    createdDate:Date.now,
    modifiedBy:null,
    modifiedDate:null,
    isActive:true

    
}
console.log(this.transport);
this._transportservice.AddTransportDetails(this.transport).subscribe(res=>
  
  {
   
    console.log(res);

  });

}



hotel = new Hotel();
AddHotelDetails(form : any)
{
  this.hotel={
    requestId:this.requestId,
    stayDateFrom:form.controls.stayingFrom.value,
    stayDateTo:form.controls.stayingTill.value,
    mealPreferenceId:this.mealId,
    noOfMealsId:this.mealcombo,
    createdBy:"ajay",
    createdDate:Date.now,
    modifiedBy:"aaa",
    modifiedDate:Date.now,
    isActive:true
  }
  this._hotelservice.AddHotelDetails(this.hotel).subscribe(res=>
    
    {
     
      console.log(res);

    })
}

projectField : boolean = false;
onProjectChange() 
{

  this.projectField = true;
  console.log("project")
  this._commontype.GetProject().subscribe(res =>
    {
     console.log(res)
     
     this.project = res;
   } );
   console.log(this.project);


  
}

projectId=15;
updateProject(e:any){
  this.projectId = e.target.value
}


CityField : boolean = false;
onCityChange() 
{

  this.CityField = true;
  console.log("project")
  this._commontype.GetCity().subscribe(res =>
    {
     console.log(res)
     
     this.city = res;
   } );
   console.log(this.city);


  
}

CityId=15;
updateCity(e:any){
  this.CityId = e.target.value
}
}
