import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
export type MessageType = 'warning' | 'info';
type MessageColor = 'red' | 'blue';

@Component({
  selector: 'title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.css']
})
export class TitleBoxComponent implements OnInit {

@Input()
title: string;

@Output()
titleClicked = new EventEmitter<string>();

sendPing(): void {
this.titleClicked.emit('My message');
}
  constructor() { }

/**
  private _type: MessageType = 'info';
 color: MessageColor = 'blue';
 @Input()
set type(value: MessageType) {
  this._type = value;
  if (this._type === 'warning') {
    this.color = 'red';
  }
  else if (this._type === 'info') {
    this.color = 'blue';
  }
}
**/
  ngOnInit() {
  //  this.showTitle = this.title;
  }

}
