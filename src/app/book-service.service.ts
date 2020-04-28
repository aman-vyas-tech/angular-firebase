import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private firebase: AngularFirestore) { }

  addBook(data) {
    return this.firebase.collection('books').add(data);
  }

  getBooks() {
   return this.firebase.collection('books').snapshotChanges();
  }

  deleteBook(id) {
      this.firebase.doc('books/'+id).delete();
  }

  updateBook(book) {
    this.firebase.doc('books/'+book.id).update(book);
  } 
  
}
