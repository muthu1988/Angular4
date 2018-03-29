import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  show: boolean

  constructor() {
    this.show = true;
   }

  showOrHide(){
    this.show = !this.show;
  }

  ngOnInit() {
  }

}
