import { Component, OnInit } from '@angular/core';

import { DeviceService } from '../device.service';
import { Device } from '../device';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  devices: Device[];

  constructor(private devicesService: DeviceService) { }

  ngOnInit() {
    this.devices = this.devicesService.getDevices();
  }

}
