import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class WorkerService {

  private workersUrl = '';

  private workers = [
    {
      id: '1',
      firstName: 'Marcin',
      lastName: 'R',
      gender: 'm'
    },
    {
      id: '2',
      firstName: 'Piotr',
      lastName: 'B',
      gender: 'm'
    },
    {
      id: '3',
      firstName: 'Marzena',
      lastName: 'Ł',
      gender: 'f'
    },
    {
      id: '4',
      firstName: 'Czesław',
      lastName: 'O',
      gender: 'm'
    }
  ];

  constructor(private http: HttpClient) { }

  getWorkers() {
    return this.workers;
  }

  getWorker(id: string) {
    return this.workers.find(worker => worker.id === id);
  }

}
