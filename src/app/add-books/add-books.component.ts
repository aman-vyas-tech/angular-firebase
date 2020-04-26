import { BookServiceService } from './../book-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
    this.bookService.addBook({title: 'First Book'});
    this.bookService.getBooks();
  }

}
