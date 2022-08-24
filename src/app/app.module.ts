import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    EmployeeListComponent,
    HomeComponent,
    UpdateComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
