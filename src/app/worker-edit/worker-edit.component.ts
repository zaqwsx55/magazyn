import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WorkerService } from './../worker.service';
import { Worker } from '../worker';

@Component({
  selector: 'app-worker-edit',
  templateUrl: './worker-edit.component.html',
  styleUrls: ['./worker-edit.component.css']
})
export class WorkerEditComponent implements OnInit {

  worker: Worker;

  constructor(private activatedRoute: ActivatedRoute, private workerService: WorkerService) { }

  ngOnInit() {
    this.getWorker();
  }

  getWorker() {
    const id = this.activatedRoute.snapshot.params.id;
    if (id) {
      this.worker = this.workerService.getWorker(id);
    } else {
      this.worker = new Worker();
    }
  }

}
