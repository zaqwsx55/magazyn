import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkersComponent } from './workers/workers.component';
import { DevicesComponent } from './devices/devices.component';
import { WorkerService } from './worker.service';
import { DeviceService } from './device.service';
import { WorkerDetailComponent } from './worker-detail/worker-detail.component';
import { WorkerEditComponent } from './worker-edit/worker-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkersComponent,
    DevicesComponent,
    WorkerDetailComponent,
    WorkerEditComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [WorkerService, DeviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
