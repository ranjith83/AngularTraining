import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { BookDetailComponent } from '../book-detail/book-detail.component';


@Injectable({
  providedIn: 'root'
})
export class CanfirmCandeactivateGuard implements CanDeactivate<BookDetailComponent> {


  canDeactivate() {
    return confirm('Are u sure?');
  }

}
