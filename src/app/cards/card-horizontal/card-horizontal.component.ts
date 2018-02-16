import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-horizontal',
  templateUrl: './card-horizontal.component.html',
  styleUrls: ['./card-horizontal.component.scss']
})
export class CardHorizontalComponent implements OnInit {

  @Input()  position: string;

  constructor() { }

  ngOnInit() {
  }

}
