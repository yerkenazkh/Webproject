import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
<<<<<<< HEAD
import { RegistrationComponent } from './components/registration/registration.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminCreateComponent } from './components/admin-create/admin-create.component';
import { AdminDeleteComponent } from './components/admin-delete/admin-delete.component'
=======
import { RegistrationComponent } from './components/registration/registration.component'
>>>>>>> 4c65522edd5b7493f2063b37f91e4904228b7778

@NgModule({
  declarations: [
    AppComponent,
    TicketsComponent,
    LoginComponent,
<<<<<<< HEAD
    RegistrationComponent,
    AdminComponent,
    AdminCreateComponent,
    AdminDeleteComponent
=======
    RegistrationComponent
>>>>>>> 4c65522edd5b7493f2063b37f91e4904228b7778
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
