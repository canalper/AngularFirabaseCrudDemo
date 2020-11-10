import { Component, OnInit } from '@angular/core';
import { AccountService } from 'app/_services/account.service';

declare const google: any;

@Component({
  selector: 'app-account-map',
  templateUrl: './account-map.component.html',
  styleUrls: ['./account-map.component.scss']
})
export class AccountMapComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.initMap();
  }

  initMap(): void {
    const myLatlng = { lat: 39, lng: 35 };
    const map = new google.maps.Map(document.getElementById('map')!, {
      zoom: 6,
      center: myLatlng,
    });
  }
}
