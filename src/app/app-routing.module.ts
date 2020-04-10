import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketsComponent } from './components/tickets/tickets.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
<<<<<<< HEAD
import { AdminComponent } from './components/admin/admin.component';
import { AdminDeleteComponent } from './components/admin-delete/admin-delete.component';
import { AdminCreateComponent } from './components/admin-create/admin-create.component';
=======
>>>>>>> 4c65522edd5b7493f2063b37f91e4904228b7778


const routes: Routes = [
  {path: 'tickets-list', component: TicketsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
<<<<<<< HEAD
  {path: 'admin', component: AdminComponent},
  {path: 'admin-delete', component: AdminDeleteComponent},
  {path: 'admin-create', component: AdminCreateComponent},
=======
>>>>>>> 4c65522edd5b7493f2063b37f91e4904228b7778
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
