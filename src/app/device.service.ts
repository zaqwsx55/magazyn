import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import 'rxjs/add/observable/combineLatest';

import { Device } from './device';
import { DeviceType } from './device-type';

@Injectable()
export class DeviceService {

  deviceCollection: AngularFirestoreCollection<Device>;
  devices: Observable<any[]>;

  deviceDocument: AngularFirestoreDocument<Device>;
  device: Observable<Device>;

  deviceTypes: Observable<any[]>;



  deviceTypesArr = {};

  constructor(private db: AngularFirestore) { }

  getDevices() {


    // this.db.collection('device-types').valueChanges().forEach(type => {
    //   console.log(type);
    // })





    this.deviceCollection = this.db.collection('devices');


    this.devices = this.deviceCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const id = a.payload.doc.id;
        const name = a.payload.doc.get('name');
        const typeRef = this.db.doc('device-types/' + a.payload.doc.get('typeId'));
        let type: {};
        typeRef.valueChanges().map((t) => {
          type = t;
        })
        // typeRef.valueChanges().subscribe((t: DeviceType) => {
        //   type = t;
        //   console.log('type: ' + t.name);
        //   console.log('tutaj: ' + id, name, type);
        // });
        console.log('koniec: ' + id, name, type);
        return {id, name, type}
      })
    })




    // this.devices = this.deviceCollection.snapshotChanges().map(actions => {
    //   return actions.map(a => {







    //     const data = a.payload.doc.data() as Device;
    //     const id = a.payload.doc.id;


    //     const deviceTypeId = a.payload.doc.get('typeId');

    //     console.log('device type id: ' + deviceTypeId);

    //     const deviceType = this.db.doc('device-types/' + deviceTypeId).valueChanges();
    //     deviceType.subscribe((type: DeviceType) => {
    //       data.type = type;

    //       console.log('data: ' + data.type.id);


    //     })
    //     return {id, ...data};

    //   });
    // });


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
    this.deviceTypes = this.db.collection('device-types').valueChanges();
    return this.deviceTypes;
  }

}
