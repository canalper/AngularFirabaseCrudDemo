import { Account } from '../_models/Account';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';

declare const google: any;

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable?: boolean;
  }
@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  accountFrom: FormGroup;
  account: Account;
  get f() { return this.accountFrom.controls; }

  constructor(fb: FormBuilder, private accountService: AccountService, private router: Router) {
    this.accountFrom = fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      company: ['', Validators.required],
      locationAccuracy: ['']
    });
   }

  ngOnInit() {
    this.initMap();
  }

  add(): void {

    if (this.accountFrom.invalid) {
      return;
    }
    this.account = {name: this.f.name.value,
      address: this.f.address.value,
      company: this.f.company.value,
      locationAccuracy: this.f.locationAccuracy.value,
      imageUrl: 'https://source.unsplash.com/random/480x480'};

    this.accountService.add(this.account).then(data => {
        this.router.navigate(['account']);
      }).catch((error) => {
        window.alert(error);
    });

  }

  initMap(): void {
    const myLatlng = { lat: 39, lng: 35 };
    const map = new google.maps.Map(document.getElementById('map')!, {
      zoom: 6,
      center: myLatlng,
    });

    // Create the initial InfoWindow.
    let infoWindow = new google.maps.InfoWindow({
      content: 'Click the map to get Lat/Lng!',
      position: myLatlng,
    });

    infoWindow.open(map);
    // Configure the click listener.
    map.addListener('click', (mapsMouseEvent) => {

      infoWindow.close();
      infoWindow = new google.maps.InfoWindow({
        position: mapsMouseEvent.latLng,

      }); console.log(mapsMouseEvent.latLng);
      infoWindow.setContent(
        JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
      );
      infoWindow.open(map);
    });
  }

}

