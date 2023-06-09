import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';  
import { UserRoleMappingComponent } from '../user-role-mapping/user-role-mapping.component'; 
import { NoComponentComponent } from '../no-component/no-component.component'; 
import { HomeNavComponent } from '../home-nav/home-nav.component';

const routes : Routes =
[ {path :'home-nav', component:HomeNavComponent,
children :[
{path:'UserRoleMapping', component:UserRoleMappingComponent},

{path:'**', component:NoComponentComponent }]},

{path:'login', component:LoginComponent}

]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ], 
  exports:[RouterModule]
})

export class RoutingModule { }
export const Components = [LoginComponent, UserRoleMappingComponent ,NoComponentComponent];
