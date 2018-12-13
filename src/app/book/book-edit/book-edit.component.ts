import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../shared/book-data.service';
import { Observable } from 'rxjs';
import { Book } from '../shared/book';

@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
public book: Observable<Book> ;
public bookIsbn: string;
  constructor(private route: ActivatedRoute, private bookData: BookDataService) { }

  ngOnInit() {
    this.bookIsbn = this.route.snapshot.params['isbn'];

    this.route.params.subscribe((params: {isbn: string}) => {
      this.book = this.bookData.getBookByIsbn(params.isbn);

    });
  }

  saveBook(value: {
    [key: string]: string
  }) {
    console.log(value);
    this.bookData.saveBookByIsbn(this.bookIsbn, value);
  }


}
