import { AuthService } from './../auth/auth.service';
import { BookServiceService } from './../book-service.service';
import { Component, OnInit } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {
  books: any = [];
  book: Book = {
    id:'jDq3mwFJeAIUrYRIM4Ui',
    isbn: 1933988673,
    title: "Unlocking Android"
  }

  constructor(private bookService: BookServiceService,
              private auth: AuthService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  public getBooks() {
    this.bookService.getBooks().subscribe(books => {
      this.books = books.map(e => {
        return {
          id: e.payload.doc.id,
          isbn: e.payload.doc.data()['isbn'],
          title: e.payload.doc.data()['title']
        };
      });
      console.log(this.books);
    });
    console.log(this.books);
  }

  public addBook(book) {
    this.bookService.addBook(book);
  }

  public deleteBook(book) {
    this.bookService.deleteBook(book);
  }

  public updateBook() {
    this.bookService.updateBook({
      id: this.books[0].id,
      title: 'New Book'
    });
  }

  public logout() {
    this.auth.logout();
  }

  public loginWithGoogle() {
    this.auth.loginWithGoogle();
  }

}
