import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WorkerService {

  workersCollection: AngularFirestoreCollection<Worker>;
  workers: Observable<Worker[]>;

  workerDocument: AngularFirestoreDocument<Worker>;
  worker: Observable<Worker>;

  constructor(private db: AngularFirestore) { }

  getWorkers(sortField, sortOrder): Observable<Worker[]> {
    this.workersCollection = this.db.collection('workers', ref => ref.orderBy(sortField, sortOrder));
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
    this.workerDocument = this.db.doc('workers/' + id);
    this.worker = this.workerDocument.valueChanges();
    return this.worker;
  }

  addWorker(worker: Worker) {
    this.db.collection('workers').add(worker);
  }

  updateWorker(id: string, newWorker: Worker) {
    this.db.doc('/workers/' + id).update(newWorker);
  }

  deleteWorker(id: string) {
    this.db.doc('/workers/' + id).delete();
  }

}
