import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UzytkownicyComponent } from './uzytkownicy/uzytkownicy.component';
import { SprzetyComponent } from './sprzety/sprzety.component';

const routes = [
  { path: 'uzytkownicy', component: UzytkownicyComponent },
  { path: 'srzety', component: SprzetyComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
