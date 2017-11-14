import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UzytkownicyComponent } from './uzytkownicy/uzytkownicy.component';
import { SprzetyComponent } from './sprzety/sprzety.component';

const routes = [
  { path: 'uzytkownicy', component: UzytkownicyComponent },
  { path: 'sprzety', component: SprzetyComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
