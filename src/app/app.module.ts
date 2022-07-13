import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { EmployeeDetailsComponent } from './MyComponents/employee-details/employee-details.component';
import { AddEmployeeComponent } from './MyComponents/add-employee/add-employee.component';
import { EditEmployeeComponent } from './MyComponents/edit-employee/edit-employee.component';
import { SetBackgroundDirective } from './Custom-Directive/Attribute-Directive/setbackground.directive';
import { CustomNgIfDirective } from './Custom-Directive/Structural-Directive/customngIf.directive';
import { AboutComponent } from './MyComponents/about/about.component';
import { FilterPipe } from './Pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeDetailsComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    SetBackgroundDirective,
    CustomNgIfDirective,
    AboutComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
