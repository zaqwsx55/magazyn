import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Device } from './device';
import { DeviceType } from './device-type';

@Injectable()
export class DeviceService {

  deviceCollection: AngularFirestoreCollection<Device>;
  devices: Observable<Device[]>;

  deviceDocument: AngularFirestoreDocument<Device>;
  device: Observable<Device>;

  deviceTypes: Observable<any[]>;

  constructor(private db: AngularFirestore) { }

  getDevices() {
    this.deviceCollection = this.db.collection('devices');
    this.devices = this.deviceCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Device;



        const id = a.payload.doc.id;
        return {id, ...data};
      });
    });
    return this.devices;
  }

  getDevice(id: string) {
    this.deviceDocument = this.db.doc<Device>('/devices/' + id);
    this.device = this.deviceDocument.valueChanges();
    return this.device;
  }

  addDevice(device: Device) {
    this.db.collection('devices').add(device);
    console.log('New Device added: ' + device);
  }

  updateDevice(id: string, newDevice: Device) {
    this.db.doc('devices/' + id).update(newDevice);
    console.log('Device with id: ' + id + ' was updated');
  }

  deleteDevice(id: string) {
    this.db.doc('devices/' + id).delete();
  }

  getDeviceTypes() {
    this.deviceTypes = this.db.collection('device-type').valueChanges();
    return this.deviceTypes;
  }

}
