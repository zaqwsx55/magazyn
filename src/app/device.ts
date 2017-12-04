import { DeviceType } from './device-type';
import { Worker } from './worker';

export class Device {

    id?: string;
    name: string;
    type: DeviceType;
    quantity?: number;
    jim?: string;
    serialNumber?: string;
    image?: string;
    document?: string;
    workerId?: string;
    voucherIn?: string;
    voucherOut?: string;

}
