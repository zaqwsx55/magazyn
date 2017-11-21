import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { WorkerService } from '../worker.service';
import { Worker } from '../worker';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {

  workers: Observable<any[]>;

  // workers: Worker[];

  constructor(private workersService: WorkerService, private db: AngularFirestore) { }

  ngOnInit() {
    this.getWorkers();

    // this.workersFire = this.db.collection('workers').valueChanges();
    // console.log(this.workersFire);
  }

  getWorkers() {
    this.workers = this.workersService.getWorkers();
  }

}
