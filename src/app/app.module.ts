import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkersComponent } from './workers/workers.component';
import { DevicesComponent } from './devices/devices.component';
import { WorkerService } from './worker.service';
import { DeviceService } from './device.service';
import { WorkerDetailComponent, DialogConfirmComponent } from './worker-detail/worker-detail.component';
import { WorkerEditComponent } from './worker-edit/worker-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
import { ToolbarComponent } from './ui/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkersComponent,
    DevicesComponent,
    WorkerDetailComponent,
    WorkerEditComponent,
    PageNotFoundComponent,
    LoadingSpinnerComponent,
    ToolbarComponent,
    DialogConfirmComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    // FormsModule,

    ReactiveFormsModule,



    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule,
    MatAutocompleteModule
  ],
  entryComponents: [
    DialogConfirmComponent
  ],
  providers: [
    WorkerService,
    DeviceService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
