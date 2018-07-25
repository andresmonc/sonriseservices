import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerheaderComponent } from './bannerheader/bannerheader.component';
import { ContainerTeamComponent } from './container-team/container-team.component';
import { ContainerFooterComponent } from './container-footer/container-footer.component';
import { ContainerProjectsComponent } from './container-projects/container-projects.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerheaderComponent,
    ContainerTeamComponent,
    ContainerFooterComponent,
    ContainerProjectsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
