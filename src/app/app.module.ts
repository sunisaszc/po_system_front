import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { Ng2Webstorage } from 'ngx-webstorage';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { LoginService } from './services/login.service'
import { AuthguardGuard } from './authguard.guard'
import { UserManagementService } from './services/user-management.service';
import { UserManagementComponent } from './components/user-management/user-management.component'
import { ProductService } from './services/product.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-management', canActivate: [AuthguardGuard], component: UserManagementComponent },
  { path: '**', canActivate: [AuthguardGuard], component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    UserManagementComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    HttpModule,
    Ng2Webstorage
  ],
  providers: [
    LoginService,
    AuthguardGuard,
    UserManagementService,
    ProductService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }