import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ContinentsComponent } from './continents/continents.component';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';
import { UserComponent } from './user/user.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { WildcardComponent } from './wildcard/wildcard.component';

const routes: Routes = [
  {path:"",component:UserComponent},
  {path:"user",component:UserComponent},
  {path:'registration',component:UserComponent},
  {path:'continents',component:ContinentsComponent,canActivate:[AuthGuard]},
  {path:'country',component:CountryComponent,canActivate:[AuthGuard]},
  {path:'state',component:StateComponent,canActivate:[AuthGuard]},
  {path: "userdetails",component:UserdetailsComponent,canActivate:[AuthGuard]},
  {path: '**',component:WildcardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
