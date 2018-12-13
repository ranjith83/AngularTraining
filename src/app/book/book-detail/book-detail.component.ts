import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../shared/book';
import { BookDataService } from '../shared/book-data.service';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  public book: Observable<Book> ;
  constructor(private route: ActivatedRoute, private bookData: BookDataService) {
      }

  ngOnInit() {
      this.route.params.subscribe((params: {isbn: string}) => {
      this.book = this.bookData.getBookByIsbn(params.isbn);

      //this.book = this.bookData.getBookByIsbn(params.isbn).subscribe(next:book => this.book = book)
      // this.route.params
      // .pipe(
      //   mergeMap((params: {isbn: string}) =>
      //   this.bookData.getBookByIsbn(params.isbn)
      //   )
      // )
      // .subscribe(book => this.book);

     });
  }

}
