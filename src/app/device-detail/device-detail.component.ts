import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DeviceService } from '../device.service';
import { Device } from '../device';
import { WorkerService } from '../worker.service';
import { Worker } from '../worker';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {

  deviceId: string;
  device: Observable<Device>;
  worker: Observable<any>;
  workerId: string;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private deviceService: DeviceService,
              private workerService: WorkerService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.deviceId = this.activatedRoute.snapshot.params.id;
    this.getDevice();
  }

  getDevice() {
    this.device = this.deviceService.getDevice(this.deviceId);
    this.device.subscribe((device) => {
      if (device.workerId) {
        this.workerId = device.workerId;
        this.worker = this.workerService.getWorker(this.workerId);
      }
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogUserComponent, {
      data: {
        deviceId: this.deviceId,
        workerId: this.workerId
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'Confirm') {
        console.log('potwierdzone');
      }
    })
  }

}

@Component({
  templateUrl: 'dialog-user.html'
})
export class DialogUserComponent implements OnInit {

  addUserForm: FormGroup;
  removeUserForm: FormGroup;
  device: Observable<Device>;
  workers: Observable<any[]>;
  workerId: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<DialogUserComponent>,
              private formBuilder: FormBuilder,
              private deviceService: DeviceService,
              private workerService: WorkerService) {};

  ngOnInit() {
    this.addUserForm = this.formBuilder.group({
      workerId: ['', Validators.required],
      voucherOut: ['', Validators.required],
      voucherOutDate: ''
    });
    this.removeUserForm = this.formBuilder.group({
      voucherIn: ['', Validators.required],
      voucherInDate: ['', Validators.required]
    });
    this.getDevice();
    this.getWorkers();
    this.workerId = this.data.workerId;
    console.log('workerId: ' + this.workerId);
  }

  getDevice() {
    this.device = this.deviceService.getDevice(this.data.deviceId);
  }

  getWorkers() {
    this.workers = this.workerService.getWorkers('firstName', 'asc');
  }

  onCloseConfirm() {
    this.dialogRef.close('Confirm');
  }

  onCloseCancel() {
    this.dialogRef.close('Cancel');
  }

  saveForm() {
    this.deviceService.updateDevice(this.data.deviceId, this.addUserForm.value);
    console.log('save form: ' + this.addUserForm.value);
  }

}
