import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CanfirmCandeactivateGuard } from './shared/canfirm-candeactivate.guard';
import { BookEditComponent } from './book-edit/book-edit.component';

  const routes: Routes = [{
    path: 'books',
    component: BookComponent,
    children: [{
      component: BookListComponent,
      path: ''
    }, {
      component: BookDetailComponent,
      path: ':isbn',
      canDeactivate: [CanfirmCandeactivateGuard]
    },
  {
    component: BookEditComponent,
    path: ':isbn/edit'
  }]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
