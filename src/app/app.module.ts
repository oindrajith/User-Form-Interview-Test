import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContinentsComponent } from './continents/continents.component';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';
import { WildcardComponent } from './wildcard/wildcard.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserdetailsComponent,
    HeaderComponent,
    FooterComponent,
    ContinentsComponent,
    CountryComponent,
    StateComponent,
    WildcardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
