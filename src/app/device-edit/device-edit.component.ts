import { DeviceType } from './../device-type';
import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Device } from '../device';
import { DeviceService } from '../device.service';
import { DeviceType } from '../device-type';

import { WorkerService } from '../worker.service';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.css']
})
export class DeviceEditComponent implements OnInit {

  pageTitle = 'Dodaj nowy sprzęt';
  deviceForm: FormGroup;
  deviceId: string;
  device: Observable<any>;
  deviceTypes: Observable<any[]>;

  workers: Observable<any[]>;


  selectedType = new DeviceType();



  testObj = [{
    name: 'Laptop',
    icon: 'laptop'
  }, {
    name: 'Drukarka',
    icon: 'print'
  }];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private deviceService: DeviceService,
              private workerService: WorkerService) { }

  ngOnInit() {
    this.createForm();

    this.workers = this.workerService.getWorkers('firstName', 'asc');

    this.deviceId = this.activatedRoute.snapshot.params.id;
    if (this.deviceId) {
      this.pageTitle = 'Edytuj dane sprzętu';
      this.getDevice();
    }
  }

  createForm() {
    this.deviceTypes = this.deviceService.getDeviceTypes();
    this.deviceForm = this.formBuilder.group({
      name: ['', Validators.required],
      type: this.formBuilder.group({
        id: '',
        name: '',
        icon: ''
      }),
      workerId: ['']
    });
  }

  onTypeSelected() {
    console.log('inside onTypeSelected');
  }

  getDevice() {
    if (this.deviceId) {
      this.device = this.deviceService.getDevice(this.deviceId);
      this.device.subscribe((d) => {
        this.deviceForm.setValue({
          name: d.name,
        });
      });
    }
  }

  saveDevice() {
    let device = new Device();
    device = this.deviceForm.value;

    console.log(device);


    if (this.deviceId) {
      this.deviceService.updateDevice(this.deviceId, this.deviceForm.value)
    } else {
      console.log('save device: ' + this.deviceForm.value);
      this.deviceService.addDevice(this.deviceForm.value);
    }
    this.goToDevices();
  }

  goToDevices() {
    this.router.navigate(['devices']);
  }


}
