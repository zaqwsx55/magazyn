import { Injectable } from '@angular/core';

@Injectable()
export class WorkerService {

  private workers = [
    {
      firstName: 'Marcin',
      lastName: 'R',
      gender: 'm'
    },
    {
      firstName: 'Piotr',
      lastName: 'B',
      gender: 'm'
    },
    {
      firstName: 'Marzena',
      lastName: 'Ł',
      gender: 'f'
    },
    {
      firstName: 'Czesław',
      lastName: 'O',
      gender: 'm'
    }
  ];

  constructor() { }

  getWorkers() {
    return this.workers;
  }

}
