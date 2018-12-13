import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mouse-cursor',
  templateUrl: './mouse-cursor.component.html',
  styleUrls: ['./mouse-cursor.component.css']
})
export class MouseCursorComponent implements OnInit {

  xCoord: number;
  yCoord: number;
  constructor() { }

  ngOnInit() {
  }

  showEventCoords(e: MouseEvent) {
  this.xCoord = e.screenX;
  this.yCoord = e.screenY;
  }
}
