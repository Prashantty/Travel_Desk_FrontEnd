import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestViewModel } from 'src/app/Interface/RequestViewModel';
import { CommentWithoutId } from 'src/app/Interface/CommentWithoutId';
import { Comment } from 'src/app/Interface/comment';
import { CommentService } from 'src/app/Services/comment.service';
import { RequestService } from 'src/app/Services/request.service';
import { Request } from 'src/app/Interface/request';
import { Route, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';



@Component({
  selector: 'app-show-request',
  templateUrl: './show-request.component.html',
  styleUrls: ['./show-request.component.css']
})
export class ShowRequestComponent implements OnInit {


  req1 : RequestViewModel[]=[];
  requests: RequestViewModel[] = [];
  pagedRequests: RequestViewModel[] = [];
  pagedRequests1: RequestViewModel[] = [];
  currentPage = 1;
  pageSize = 100;
  totalPages = 1;
  searchText = '';

  Role = localStorage.getItem("Role");
  constructor(private http: HttpClient , private commentService: CommentService , private _requesservice : RequestService , private _router : Router , private _auth : AuthenticationService) { }

  ngOnInit() {
    this.fetchRequests();
    this.getrequestdata();
    //this.getrequestbyId(1);
    console.log(this.Role);
    this.getreqbyid();
    
    
  }

  fetchRequests() {
    this.http.get<RequestViewModel[]>('https://localhost:7044/api/requestViews').subscribe(
      (data: RequestViewModel[]) => {
      this.requests = data;
        console.log(data);
        this.filterRequests();
      },
      (error) => {
        console.error('Error fetching requests:', error);
      }
    );
  }
  
  filterRequests() {
    const filteredRequests = this.requests.filter(request =>
      request.userFirstName.toLowerCase().includes(this.searchText.toLowerCase())
    );

    this.totalPages = Math.ceil(filteredRequests.length / this.pageSize);
    this.currentPage = 1;
    this.updatePagedRequests(filteredRequests);
  }

  updatePagedRequests(filteredRequests: RequestViewModel[]) {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedRequests = filteredRequests.slice(startIndex, endIndex);
   
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagedRequests(this.requests);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagedRequests(this.requests);
    }
  }

  Value : boolean = false;
  requestId :any ;
 request : Request[]= [];

  // TypeScript functions to control the popup
 openPopup(requestID : any) {
  const popup = document.getElementById('popup');
  this.Value= true;
  if (popup) {
    popup.style.display = 'flex';
  }
  this.requestId= requestID; 
    console.log(this.requestId);
    this.getrequestbyId(this.requestId);
   // this.closePopup();
}


getrequestbyId(requestId : any){
  console.log(this.requestId)
  console.log(this.requestId);
  this._requesservice.GetRequestById(this.requestId).subscribe(res => {
    console.log(res);
    
    this.req= res;
    this.req.statusId=22;
    console.log(this.req);
    this._requesservice.EditStatusById(requestId, this.req).subscribe(res => {
      console.log(res);
    })
  })
  
  
}


req : Request = {
  requestId:0,
  
  createdBy
  : 
  "Me",
  createdDate
  : 
  "2023-06-20T13:28:53.7866667",
  isActive
  : 
  true,
  managerId
  : 
  3,
  modifiedBy
  : 
  "Me",
  modifiedDate
  : 
  "2023-06-20T13:28:53.7866667",

  projectId
  : 
  6,
  reasonForTraveling
  : 
  "Travel",
  statusId
  : 
  9,
  typeOfBookingId
  : 
  11,
  userId
  : 
  4


};



closePopup() {
  const popup = document.getElementById('popup');
  if (popup) {
    popup.style.display = 'none';
    
  }
  this._router.navigate(['/common'])

}

 
_cmt_add: CommentWithoutId ={
  commentName: "string" ,
  requestId: 0,
  createdBy : "string",
  createdDate: new Date ,
  modifiedBy : "string",
  modefiedDate : new Date ,
  isActive : true
}
createComment1(regForm:any) {
    
  this._cmt_add.commentName=regForm.controls.commentName.value;
  this._cmt_add.requestId= this.requestId ;
  // console.log("hitting");
  // console.log(this._cmt_add);
  // _cmt_add: Comment| undefined;
  console.log("111111111111");
  this.commentService.createComment(this._cmt_add).subscribe(res=>{
    console.log(res);
  });
  // this.newComment = new commentModel.Comment();
}


getrequestdata()
{
  //this.requestId = this.requests(x => x.requestID);

  console.log(this.requestId );
}


reqObj = new Request();
getreqbyid()
{

  const id = this._auth.getUserId();

  this.http.get<RequestViewModel[]>('https://localhost:7044/api/requestViews/'+id).subscribe(
      (data: RequestViewModel[]) => {
       this.req1 = data;
        console.log(data);
        this.filterRequests1();
      },
      (error) => {
        console.error('Error fetching requests:', error);
      }
    );

}



filterRequests1() {
  const filteredRequests1 = this.req1.filter(request =>
    request.userFirstName.toLowerCase().includes(this.searchText.toLowerCase())
  );

  this.totalPages = Math.ceil(filteredRequests1.length / this.pageSize);
  this.currentPage = 1;
  this.updatePagedRequests1(filteredRequests1);
}

updatePagedRequests1(filteredRequests1: RequestViewModel[]) {
  const startIndex = (this.currentPage - 1) * this.pageSize;
  const endIndex = startIndex + this.pageSize;
  this.pagedRequests1 = filteredRequests1.slice(startIndex, endIndex);
 
}

previousPage1() {
  if (this.currentPage > 1) {
    this.currentPage--;
    this.updatePagedRequests1(this.req1);
  }
}

nextPage1() {
  if (this.currentPage < this.totalPages) {
    this.currentPage++;
    this.updatePagedRequests1(this.req1);
  }
}


}
