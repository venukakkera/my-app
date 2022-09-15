import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { ActivityComponent } from './activity/activity.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { AuthGuard } from './auth.guard';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarsComponent } from './cars/cars.component';
import { CartComponent } from './cart/cart.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EmployeeComponent } from './employee/employee.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { GpayComponent } from './gpay/gpay.component';
import { HomeComponent } from './home/home.component';
import { HospitalComponent } from './hospital/hospital.component';
import { ItemComponent } from './item/item.component';
import { LoginComponent } from './login/login.component';
import { MailComponent } from './mail/mail.component';
import { NotifyGuard } from './notify.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PersonComponent } from './person/person.component';
import { PipesComponent } from './pipes/pipes.component';
import { PostComponent } from './post/post.component';
import { RectangilarComponent } from './rectangilar/rectangilar.component';
import { SruareComponent } from './sruare/sruare.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
    {path:'login', component: LoginComponent},
    {path:'dashboard',component: DashboardComponent, canActivate:[AuthGuard],children:[
    {path:'home',component:HomeComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'square',component:SruareComponent},
    {path:'databinding',component:DataBindingComponent},
    {path:'eventbinding',component:EventBindingComponent},
    {path:'twowaybinding',component:TwowayBindingComponent},
    {path:'rectangilar',component:RectangilarComponent},
    {path :'eventregistration',component:EventRegistrationComponent},
    {path:'studentregistration',component:StudentRegistrationComponent},
    {path:'cart',component:CartComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'pipes',component:PipesComponent},
    {path:'cars',component:CarsComponent},
    {path:'hospital',component:HospitalComponent},
    {path:'gpay',component:GpayComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'accounts',component:AccountsComponent},
    {path:'item',component:ItemComponent},
    {path:'post',component:PostComponent},
    {path:'mail',component:MailComponent},
    {path:'person',component:PersonComponent},
    {path:'activity',component:ActivityComponent},
    {path:'applicationform',component:ApplicationFormComponent},
    {path:'create-vehicle',component:CreateVehicleComponent , canDeactivate:[NotifyGuard]},
    {path:'createuser',component:CreateUserComponent},
    {path:'createstudent',component:CreateStudentComponent}
    
]},
  {path:'',component: LoginComponent},
  {path: '**',component : PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
