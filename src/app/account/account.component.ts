import { Component, OnInit } from '@angular/core';
import { AccountService } from 'app/_services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  dataSource;
  displayedColumns: string[];
  constructor(private accountService: AccountService) { }

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
    this.accountService.delete(element);
  }

}
