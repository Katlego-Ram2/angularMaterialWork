import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DataStoredComponent } from './data-stored/data-stored.component';
import { DialogAComponent } from './dialog-a/dialog-a.component';

const routes: Routes = [
  {
    path:"",pathMatch:'full',component:HomeComponent
  },
  {
    path:"index",component:HomeComponent
  },
  {
    path:"home",component:HomeComponent
  },
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"view",component:DataStoredComponent
  },
  {
    path:"invoice",component:DialogAComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
