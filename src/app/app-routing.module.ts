import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ReturnpolicyComponent } from './returnpolicy/returnpolicy.component';
import { ShipDelComponent } from './ship-del/ship-del.component';
import { UserComponent } from './user/user.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'user',component:UserComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'view/:id',component:ViewComponent},
  {path:'checkout/:id',component:CheckoutComponent},
  {path:'footer',component:FooterComponent},
  {path:'contact',component:ContactComponent},
  {path:'shipdel',component:ShipDelComponent},
  {path:'returnpolicy',component:ReturnpolicyComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 