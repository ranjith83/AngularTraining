import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: '/books'
}];

// const routes: Routes = [ {
//   path: 'books',
//   component: BookListComponent
// },
// {
//   path: '',
//   pathMatch: 'full',
//   redirectTo: '/books'
// },
// { path: 'books/:isbn',
//   component: BookDetailComponent
// }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
