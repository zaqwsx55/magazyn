import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DeviceService } from '../device.service';
import { Device } from '../device';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  devices: Observable<any[]>;
  deviceTypes: Observable<any[]>;

  constructor(private devicesService: DeviceService) { }

  ngOnInit() {
    this.getDevices();
  }

  getDevices(): void {
    this.devices = this.devicesService.getDevices();
  }

  getDeviceTypes(): void {
    this.deviceTypes = this.devicesService.getDeviceTypes();
  }

}
