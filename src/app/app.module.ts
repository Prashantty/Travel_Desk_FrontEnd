import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { UserRoleMappingComponent } from './user-role-mapping/user-role-mapping.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { NoComponentComponent } from './no-component/no-component.component';
import { Components,RoutingModule } from './routing/routing.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserRoleMappingComponent,
    HomeNavComponent,
    Components,
    NoComponentComponent
    

   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoutingModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
