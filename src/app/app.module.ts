import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { MouseCursorComponent } from './mouse-cursor/mouse-cursor.component';
import { TitleBoxComponent } from './title-box/title-box.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { BookModule } from './book/book.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    InfoBoxComponent,
    MouseCursorComponent,
    TitleBoxComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BookModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
