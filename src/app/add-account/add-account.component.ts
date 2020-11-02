import { Account } from '../_models/Account';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  accountFrom: FormGroup;
  account: Account;
  get f() { return this.accountFrom.controls; }

  constructor(fb: FormBuilder, private accountService: AccountService, public dialog: MatDialog) {
    this.accountFrom = fb.group({
      name: [''],
      address: [''],
      company: ['']
    });
   }

  ngOnInit() {
  }

  add(): void {

    if (this.accountFrom.invalid) {
      return;
    }
    this.account = {name: this.f.name.value, address: this.f.address.value, company: this.f.company.value, imageUrl: 'https://source.unsplash.com/random/480x480'};
    this.accountService.add(this.account);
  }
}

