import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { ReposTableComponent } from '../components/repos-table/repos-table.component';
import { ContactComponent } from '../contact/contact.component';
import { HomeComponent } from '../home/home.component';
import { NoFoundComponent } from '../no-found/no-found.component';

const routers = [
  // { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'no-found', component: NoFoundComponent },
  { path: '**', redirectTo: 'no-found' }
]

@NgModule({
  declarations: [
    ContactComponent,
    HomeComponent,
    LoginComponent,
    ReposTableComponent
  ],
  imports: [
    CommonModule,

    MatTableModule,
    RouterModule.forRoot(routers),
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
