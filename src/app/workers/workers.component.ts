import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';

import { WorkerService } from '../worker.service';
import { Worker } from '../worker';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Router } from '@angular/router';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {

  workers: Observable<any[]>;
  showSpinner = true;
  sortForm: FormGroup;
  sortType = 'firstName-asc';

  workersArray = [];
  workersFilteredArray = [];
  // filteredWorkers = [];


  constructor(private workersService: WorkerService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.getWorkers();
    this.createForm();


    this.sortForm.get('search').valueChanges
      .debounceTime(300)
      .subscribe(term => {
        const filterBy = term ? term.toLowerCase() : null;
        const filteredWorkers = filterBy ? this.workersArray.filter(
          worker => worker.firstName.toLowerCase().indexOf(filterBy) !== -1) : this.workersArray;
        this.workersFilteredArray = filteredWorkers;
      });

  }

  createForm() {
    this.sortForm = this.formBuilder.group({
      search: [''],
      sort: [this.sortType],
      department: ['']
    });
  }

  displayFn(worker: Worker) {
    console.log('inside displayFn');
    return worker ? worker.firstName + ' ' + worker.lastName : worker;
  }

  selectWorker(event: MatAutocompleteSelectedEvent) {
    const worker: Worker = event.option.value;
    this.router.navigate(['workers', worker.id]);
  }

  onSortChanged() {
    this.sortType = this.sortForm.get('sort').value;
    this.getWorkers();
  }


  getWorkers() {
    const sortField = this.sortType.split('-')[0];
    const sortOrder = this.sortType.split('-')[1];
    this.workers = this.workersService.getWorkers(sortField, sortOrder);
    this.workers.subscribe((workers) => {
      this.workersArray = workers;
      this.workersFilteredArray = workers;
      this.showSpinner = false
    });
  }

}
