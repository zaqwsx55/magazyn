import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WorkerService {

  workersCollection: AngularFirestoreCollection<Worker>;
  workers: Observable<Worker[]>;

  workerDoc: AngularFirestoreDocument<Worker>;
  worker: Observable<Worker>;

  constructor(private db: AngularFirestore) { }

  getWorkers(): Observable<Worker[]> {
    this.workersCollection = this.db.collection<Worker>('workers');
    this.workers = this.workersCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Worker;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
    return this.workers;
  }

  getWorker(id: string) {
    this.workerDoc = this.db.doc<Worker>('workers/' + id);
    this.worker = this.workerDoc.valueChanges();
    return this.worker;
  }

}
