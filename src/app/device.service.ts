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
    },
    {
      name: 'Fujitsu Fi-6240Z',
      type: 'Skaner',
      icon: 'scanner',
      image: 'fujitsu-fi6240z.jpg'
    },
    {
      name: 'IP Cisco CP-7975G',
      type: 'Telefon',
      icon: 'phone',
      image: 'cisco-7975g.jpg'
    },
    {
      name: 'Switch D-Link DGS-1008P',
      type: 'Sieć',
      icon: 'router',
      image: 'DGS-1008P.png'
    }
  ];

  constructor() { }

  getDevices() {
    return this.devices;
  }

}
