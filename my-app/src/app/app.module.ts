import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { SruareComponent } from './sruare/sruare.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangilarComponent } from './rectangilar/rectangilar.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { CartComponent } from './cart/cart.component';
import { EmployeeComponent } from './employee/employee.component';
import { PipesComponent } from './pipes/pipes.component';
import { PricePipe } from './price.pipe';
import { PackagePipe } from './package.pipe';
import { AgePipe } from './age.pipe';
import { CarsComponent } from './cars/cars.component';
import { HospitalComponent } from './hospital/hospital.component';
import { GpayComponent } from './gpay/gpay.component';

import { HttpClientModule} from'@angular/common/http';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ItemComponent } from './item/item.component';
import { PostComponent } from './post/post.component';
import { MailComponent } from './mail/mail.component';
import { PersonComponent } from './person/person.component';
import { ActivityComponent } from './activity/activity.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { StarComponent } from './star/star.component';
import { ProductComponent } from './product/product.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { NavComponent } from './nav/nav.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    CalculatorComponent,
    SruareComponent,
    DataBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    RectangilarComponent,
    EventRegistrationComponent,
    StudentRegistrationComponent,
    CartComponent,
    EmployeeComponent,
    PipesComponent,
    PricePipe,
    PackagePipe,
    AgePipe,
    CarsComponent,
    HospitalComponent,
    GpayComponent,
    VehicleComponent,
    AccountsComponent,
    ItemComponent,
    PostComponent,
    MailComponent,
    PersonComponent,
    ActivityComponent,
    ApplicationFormComponent,
    CreateVehicleComponent,
    CreateUserComponent,
    CreateStudentComponent,
    ParentComponent,
    ChildComponent,
    StarComponent,
    ProductComponent,
    CartlistComponent,
    NavComponent,
    VehicleDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
