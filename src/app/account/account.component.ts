import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AccountService } from 'app/_services/account.service';
import { CancelConfirmDialogComponent } from '../cancel-confirm-dialog/cancel-confirm-dialog.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  dataSource;
  displayedColumns: string[];
  constructor(private accountService: AccountService, private dialog: MatDialog) { }

  ngOnInit() {
    this.displayedColumns = ['imageUrl', 'name', 'company', 'address', 'action'];

    this.accountService
    .get()
    .subscribe(data => {
        console.log(data);
        this.dataSource = data;
    });
  }
  delete(element): void {
    const ref: MatDialogRef<CancelConfirmDialogComponent> = this.dialog.open(CancelConfirmDialogComponent,{
      maxWidth: '900px',
      maxHeight: '600px',
      });
    ref.afterClosed().subscribe( (data) => {
    if (data.clicked === 'Ok') {
      this.accountService.delete(element);
     } else if (data.clicked === 'Cancel') {
     }
    },
    (err) => {});
  }
}
