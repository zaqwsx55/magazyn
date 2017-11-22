import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

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

  private workerId: string;
  worker: Observable<any>;

  constructor(private route: ActivatedRoute, private workerService: WorkerService) { }

  ngOnInit() {
    this.workerId = this.route.snapshot.params.id;
    this.getWorker();
  }

  getWorker() {
    this.worker = this.workerService.getWorker(this.workerId);
  }

}
