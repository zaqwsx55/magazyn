import { Component, OnInit } from '@angular/core';
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
  showSpinner = true;

  constructor(private workersService: WorkerService) { }

  ngOnInit() {
    this.getWorkers();
  }

  getWorkers() {
    this.workers = this.workersService.getWorkers();
    this.workers.subscribe(() => this.showSpinner = false);
  }

}
