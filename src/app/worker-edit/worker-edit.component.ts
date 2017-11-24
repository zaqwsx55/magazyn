import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';

import { WorkerService } from '../worker.service';
import { Worker } from '../worker';

@Component({
  selector: 'app-worker-edit',
  templateUrl: './worker-edit.component.html',
  styleUrls: ['./worker-edit.component.css']
})
export class WorkerEditComponent implements OnInit {

  workerForm: FormGroup;

  workerId: string;
  worker: Observable<any>;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private workerService: WorkerService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.workerId = this.activatedRoute.snapshot.params.id;
    this.getWorker();
  }

  createForm() {
    this.workerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', [Validators.required, Validators.maxLength(1)]],
      gender: ['', Validators.required]
    });
  }

  getWorker() {
    if (this.workerId) {
      this.worker = this.workerService.getWorker(this.workerId);
      this.worker.subscribe((w) => {
        this.workerForm.setValue({
          firstName: w.firstName,
          lastName: w.lastName,
          gender: w.gender
        });
      });
    }
  }

  addWorker(a: any) {
    console.log(a);
  }

  goToWorkers() {
    this.router.navigate(['/workers']);
  }

}
