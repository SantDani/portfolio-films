import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { HomeComponent } from '../home/home.component';
import { NoFoundComponent } from '../no-found/no-found.component';

const routers = [
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'no-found', component: NoFoundComponent },
  { path: '**', redirectTo: 'no-found' }
]

@NgModule({
  declarations: [

    ContactComponent,
    HomeComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routers)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
