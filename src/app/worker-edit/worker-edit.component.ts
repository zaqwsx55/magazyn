import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



import { FormControl } from '@angular/forms';



import { Observable } from 'rxjs/Observable';

import { WorkerService } from './../worker.service';
import { Worker } from '../worker';

@Component({
  selector: 'app-worker-edit',
  templateUrl: './worker-edit.component.html',
  styleUrls: ['./worker-edit.component.css']
})
export class WorkerEditComponent implements OnInit {

  firstName = new FormControl();
  lastName = new FormControl();
  gender = new FormControl();

  workerId: string;
  worker: Observable<any>;

  constructor(private activatedRoute: ActivatedRoute, private workerService: WorkerService) { }

  ngOnInit() {
    this.workerId = this.activatedRoute.snapshot.params.id;
    this.getWorker();
  }

  getWorker() {
    if (this.workerId) {
      this.worker = this.workerService.getWorker(this.workerId);
      this.worker.subscribe((w) => {
        this.firstName.setValue(w.firstName);
        this.lastName.setValue(w.lastName);
        this.gender.setValue(w.gender);
      });
    } else {
      // this.name.setValue('');
    }
  }

}
