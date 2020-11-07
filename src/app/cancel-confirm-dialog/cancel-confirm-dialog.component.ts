import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cancel-confirm-dialog',
  templateUrl: './cancel-confirm-dialog.component.html',
  styleUrls: ['./cancel-confirm-dialog.component.scss']
})
export class CancelConfirmDialogComponent implements OnInit {


 constructor(public dialogRef: MatDialogRef<CancelConfirmDialogComponent>) {
 }

  ngOnInit() {
  }

}
