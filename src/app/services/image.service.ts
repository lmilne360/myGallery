import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Rx';
import {  AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import 'firebase/storage'
import { GalleryImage } from '../models/galleryImage.model';
import * as firebase from 'firebase/app';
import { map } from 'rxjs/operators';

@Injectable()
export class ImageService {
  private uid: string;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.uid = auth.uid;
      }
    })
   }

   getImages(): Observable<GalleryImage[]> {
    return this.db.list('uploads').snapshotChanges()
    .pipe(map(actions => actions.map(a => ({key: a.key, ...a.payload.val()}))))
   }
  getImage(key: string) {
    return firebase.database().ref('uploads/' + key).once('value')
    .then((snap) => snap.val());
  }
}
