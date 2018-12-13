import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements OnInit {

  isHidden = false;
  
  constructor() { }

  ngOnInit() {
     }

SwitchMe() {
  this.isHidden = !this.isHidden;
}

}
