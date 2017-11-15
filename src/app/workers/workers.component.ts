import { Component, OnInit } from '@angular/core';

import { WorkerService } from '../worker.service';
import { Worker } from '../worker';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {

  workers: Worker[];

  constructor(private workersService: WorkerService) { }

  ngOnInit() {
    this.getWorkers();
  }

  getWorkers() {
    this.workers = this.workersService.getWorkers();
  }

}
