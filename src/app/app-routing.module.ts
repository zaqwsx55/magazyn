import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WorkersComponent } from './workers/workers.component';
import { WorkerDetailComponent } from './worker-detail/worker-detail.component';
import { WorkerEditComponent } from './worker-edit/worker-edit.component';
import { DevicesComponent } from './devices/devices.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { DeviceEditComponent } from './device-edit/device-edit.component';
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
  { path: 'devices/:id', component: DeviceDetailComponent },
  { path: 'deviceedit', component: DeviceEditComponent },
  { path: 'deviceedit/:id', component: DeviceEditComponent },
  { path: '', component: HomeComponent },
  // { path: '', redirectTo: '/workers', pathMatch: 'full' },
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
