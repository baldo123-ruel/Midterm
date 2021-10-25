import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './home-nav/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
<<<<<<< HEAD
import { ProfileComponent } from './pages/profile/profile.component';
=======
import { ContactComponent } from './pages/contact/contact.component';
>>>>>>> develop

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
<<<<<<< HEAD
    ProfileComponent
=======
    ContactComponent
>>>>>>> develop
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
