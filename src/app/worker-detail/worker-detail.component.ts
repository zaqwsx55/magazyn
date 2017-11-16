import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Worker } from '../worker';
import { WorkerService } from './../worker.service';

import { HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';

@Component({
  selector: 'app-worker-detail',
  templateUrl: './worker-detail.component.html',
  styleUrls: ['./worker-detail.component.css'],
  // animations: [slideInDownAnimation]
})
export class WorkerDetailComponent implements OnInit {

  // @HostBinding('@routeAnimation') routeAnimation = true;
  // @HostBinding('style.display') display = 'block';
  // @HostBinding('style.position') position = 'absolute';

  worker: Worker;

  constructor(private route: ActivatedRoute, private workerService: WorkerService) { }

  ngOnInit() {
    this.getWorker();
  }

  getWorker() {
    const id = this.route.snapshot.params.id;
    // const id = this.route.snapshot.paramMap.get('id');
    this.worker = this.workerService.getWorker(id);
    console.log(this.worker);
  }

}
