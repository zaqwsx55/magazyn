import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WorkerService {

  workers: Observable<any[]>;

  // private workers = [
  //   {
  //     id: '1',
  //     firstName: 'Marcin',
  //     lastName: 'R',
  //     gender: 'm'
  //   },
  //   {
  //     id: '2',
  //     firstName: 'Piotr',
  //     lastName: 'B',
  //     gender: 'm'
  //   },
  //   {
  //     id: '3',
  //     firstName: 'Marzena',
  //     lastName: 'Ł',
  //     gender: 'f'
  //   },
  //   {
  //     id: '4',
  //     firstName: 'Czesław',
  //     lastName: 'O',
  //     gender: 'm'
  //   }
  // ];

  constructor(private db: AngularFirestore) { }

  getWorkers() {
    this.workers = this.db.collection('workers').valueChanges();
    return this.workers;
    // return this.workers;
  }

  getWorker(id: string) {
    // return this.workers.find(worker => worker.id === id);
  }

}
