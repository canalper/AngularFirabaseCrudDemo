import { Component, OnInit } from '@angular/core';
import { AccountService } from 'app/_services/account.service';
import { map } from 'rxjs/operators';
import { Account } from './../_models/Account';

declare const google: any;

@Component({
  selector: 'app-account-map',
  templateUrl: './account-map.component.html',
  styleUrls: ['./account-map.component.scss']
})
export class AccountMapComponent implements OnInit {
  map: any;
  private accountList: Account[];

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.initMap();
  }

  initMap(): void {
    const myLatlng = { lat: 39, lng: 35 };
     this.map = new google.maps.Map(document.getElementById('map')!, {
      zoom: 6,
      center: myLatlng,
    });

    var geoJson = {
      'type': 'FeatureCollection',
      'features': []
    };
     this.accountService.getAccountListAtGeoJsonFormat().
     pipe(map(actions => {
       return actions.map(a => {
         const name = a.payload.doc.data()['name'];
         const latitude = a.payload.doc.data()['latitude'];
         const longitude = a.payload.doc.data()['longitude'];
         return { name, latitude, longitude };
       });
     })).subscribe((accounts: Account[]) => {
      this.accountList = accounts;

      this.accountList.forEach(account => {
        geoJson.features.push({
          'type': 'Feature',
          'properties': { name: account.name },
          'geometry': {
            'type': 'Point',
            'coordinates': [
              account.longitude,
              account.latitude
            ]
          }
        });
      });
      this.map.data.addGeoJson(geoJson);
    });
  }
}
