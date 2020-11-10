import { Account } from './../_models/Account';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private firestore: AngularFirestore) { }

  getList() {
    return this.firestore
      .collection('account')
      .valueChanges();
  }
  get() {
    return this.firestore
      .collection('account')
      .snapshotChanges().pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data };
        });
      }));
  }
  add(account) {
    return this.firestore.collection('account').add(account);
  }
  delete(accountId: string) {
    this.firestore.doc('account/' + accountId).delete();
  }

  getAccountListAtGeoJsonFormat() {
    var geoJson = {
      'type': 'FeatureCollection',
      'features': []
    };

     this.firestore
      .collection('account')
      .valueChanges();
  }

}


