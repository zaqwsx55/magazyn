import { Injectable } from '@angular/core';

import { Device } from './device';

@Injectable()
export class DeviceService {

  devices = [
    {
      name: 'Dell e6430s',
      type: 'Laptop',
      icon: 'laptop',
      image: 'dell-latitude-e6430s.jpg'
    },
    {
      name: 'Kyocera FS-9530DN',
      type: 'Drukarka',
      icon: 'print',
      image: 'kyocera-fs9530dn.jpg'
    }
  ];

  constructor() { }

  getDevices() {
    return this.devices;
  }

}
