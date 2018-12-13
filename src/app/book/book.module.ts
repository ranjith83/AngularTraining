import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDataService } from './shared/book-data.service';
import { CanfirmCandeactivateGuard } from './shared/canfirm-candeactivate.guard';
import { FormsModule } from '@angular/forms';
import { BookEditComponent } from './book-edit/book-edit.component';

@NgModule({
  declarations: [
    BookComponent,
    BookListComponent,
    BookDetailComponent,
    BookEditComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule
  ],
  providers: [
    BookDataService,
    CanfirmCandeactivateGuard]
})
export class BookModule { }
