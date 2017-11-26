import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  showSpinner = true;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private workerService: WorkerService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.workerId = this.route.snapshot.params.id;
    this.getWorker();
  }

  getWorker() {
    this.worker = this.workerService.getWorker(this.workerId);
    this.worker.subscribe(() => this.showSpinner = false);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogConfirmComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'Confirm') {
        console.log('potwierdzone');
        this.workerService.deleteWorker(this.workerId);
        this.snackBar.open('Usunięto pracownika', 'OK', {
          duration: 3000
        });
        this.router.navigate(['/workers']);
      }
    })
  }

  confirmed() {
    console.log('inside confirmed');
  }


}

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: 'dialog-confirm.html'
})
export class DialogConfirmComponent {

  constructor(private dialogRef: MatDialogRef<DialogConfirmComponent>) { }

  onCloseConfirm() {
    console.log('inside onCloseConfirm');
    this.dialogRef.close('Confirm');
  }

  onCloseCancel() {
    console.log('inside onCloseCancel');
    this.dialogRef.close('Cancel');
  }

}
