import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private firebase: AngularFirestore) { }

  addBook(data) {
    return new Promise<any>((resolve, reject) => {
      this.firebase.collection('books').add(data);
    });
  }

  getBooks() {
    return new Promise<any>((resolve, reject) => {
      this.firebase.collection('books').snapshotChanges().subscribe(data => {
        console.log(data);
      });
    })
  }
}
