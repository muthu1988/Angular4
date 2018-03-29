import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input('master') masterName: string;

  @Output() sendMessage = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  send() {
    this.sendMessage.emit("Clicked in parent");
  }

}
