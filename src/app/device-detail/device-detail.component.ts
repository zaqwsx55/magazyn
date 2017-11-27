import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { DeviceService } from '../device.service';
import { Device } from '../device';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {

  deviceId: string;
  device: Observable<Device>;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private deviceService: DeviceService) { }

  ngOnInit() {
    this.deviceId = this.activatedRoute.snapshot.params.id;
    this.getDevice();
  }

  getDevice() {
    this.device = this.deviceService.getDevice(this.deviceId);
  }

}
