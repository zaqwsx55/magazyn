import { Injectable } from '@angular/core';

import { Device } from './device';

@Injectable()
export class DeviceService {

  devices = [
    {
      name: 'Dell e6430s'
    },
    {
      name: 'Kyocera FS9530'
    }
  ];

  constructor() { }

  getDevices() {
    return this.devices;
  }

}
