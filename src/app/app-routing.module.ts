import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkersComponent } from './workers/workers.component';
import { DevicesComponent } from './devices/devices.component';

const routes = [
  { path: 'workers', component: WorkersComponent },
  { path: 'devices', component: DevicesComponent }
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
