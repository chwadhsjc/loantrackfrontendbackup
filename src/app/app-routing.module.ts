import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent} from './body/body.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { LoanComponent } from './loan/loan.component';
import { TakeloanComponent } from './takeloan/takeloan.component';
import { AdminportalComponent } from './adminportal/adminportal.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserdataComponent } from './userdata/userdata.component';
const routes: Routes = [
  {path: 'body', component: BodyComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'main', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'loan', component: LoanComponent},
  {path: 'takeloan', component: TakeloanComponent},
  {path: 'adminportal', component: AdminportalComponent},
  {path: 'userlist', component: UserlistComponent},
  {path: 'userdata', component: UserdataComponent},
  {path:'', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BodyComponent,NavbarComponent,FooterComponent,RegisterComponent,MainComponent,LoginComponent,LoanComponent,TakeloanComponent,AdminportalComponent,UserlistComponent,UserdataComponent]