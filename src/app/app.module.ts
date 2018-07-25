import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerheaderComponent } from './bannerheader/bannerheader.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerheaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
