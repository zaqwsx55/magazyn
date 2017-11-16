import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkersComponent } from './workers/workers.component';
import { WorkerDetailComponent } from './worker-detail/worker-detail.component';
import { WorkerEditComponent } from './worker-edit/worker-edit.component';
import { DevicesComponent } from './devices/devices.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/**
 * TODO
 * te ścieżki są do poprawy
 * powinno być przez ChildComponent
 */
const routes = [
  { path: 'workers', component: WorkersComponent },
  { path: 'workers/:id', component: WorkerDetailComponent },
  { path: 'workeredit', component: WorkerEditComponent },
  { path: 'workeredit/:id', component: WorkerEditComponent },
  { path: 'devices', component: DevicesComponent },
  { path: '', redirectTo: '/workers', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
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
